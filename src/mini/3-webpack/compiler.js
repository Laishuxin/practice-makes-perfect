const $fs = require('fs')
const $parser = require('@babel/parser')
const $traverse = require('@babel/traverse').default
const $babel = require('@babel/core')
const $path = require('path')
const config = require('./webpack.config')

class Parser {}

/**
 * Generate abstract syntax tree.
 * @param { string } filename the name of a js file
 * @returns { object } ast tree
 */
function getAst(filename) {
  const content = $fs.readFileSync(filename, 'utf-8')
  return $parser.parse(content, {
    sourceType: 'module',
  })
}

function getDependencies(ast, filename) {
  const dependencies = {}
  $traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = $path.dirname(filename)
      const sourceValue = node.source.value
      const filepath = $path.join(dirname, sourceValue)
      dependencies[sourceValue] = filepath
    },
  })
  return dependencies
}

function getCode(ast) {
  const { code } = $babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env'],
  })
  return code
}

class Compiler {
  constructor(options) {
    // 解析配置文件
    const { entry, output } = options
    this.entry = entry
    this.output = output
    this.modules = []
  }

  run() {
    // 从入口文件开始
    this.modules.push(this.build(this.entry))

    // 模块收集
    this.modules.forEach(({ dependencies }) => {
      if (dependencies) {
        Object.keys(dependencies).forEach(dep => {
          this.modules.push(this.build(dependencies[dep]))
        })
      }
    })

    const dependenciesGraph = this.modules.reduce((graph, module) => {
      return {
        ...graph,
        [module.filename]: {
          dependencies: module.dependencies,
          code: module.code,
        },
      }
    }, {})
    this.generate(dependenciesGraph)
  }

  build(filename) {
    const ast = getAst(filename)
    const dependencies = getDependencies(ast, filename)
    const code = getCode(ast)
    return {
      filename,
      dependencies,
      code,
    }
  }

  generate(graph) {
    const outputFilePath = $path.join(this.output.path, this.output.filename)
    const bundle = `(function (graph) {
      function require(module) {
        var exports = {}
        function localRequire(dep) {
          return require(graph[module].dependencies[dep])
        }

        ;(function(require, exports, code) {
          eval(code)
        })(localRequire, exports, graph[module].code)

        return exports
      }
      require(${JSON.stringify(this.entry)})
    })(
      ${JSON.stringify(graph)}
    )`

    !$fs.existsSync(this.output.path) && $fs.mkdirSync(this.output.path)
    $fs.writeFileSync(outputFilePath, bundle, 'utf-8')
  }
}

new Compiler(config).run()
