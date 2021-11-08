;(function (graph) {
  function require(module) {
    var exports = {}
    function localRequire(dep) {
      return require(graph[module].dependencies[dep])
    }

    ;(function (require, exports, code) {
      eval(code)
    })(localRequire, exports, graph[module].code)

    return exports
  }
  require('d:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\index.js')
})({
  'd:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\index.js': {
    dependencies: {
      './sum.js':
        'd:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\sum.js',
      './subtract.js':
        'd:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\subtract.js',
    },
    code:
      '"use strict";\n\nvar _sum = _interopRequireDefault(require("./sum.js"));\n\nvar _subtract = _interopRequireDefault(require("./subtract.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction main() {\n  console.log((0, _sum["default"])(1, 2));\n  console.log((0, _subtract["default"])(2, 1));\n}\n\nmain();',
  },
  'd:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\sum.js': {
    dependencies: {},
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = sum;\n\nfunction sum(a, b) {\n  return a + b;\n}',
  },
  'd:\\markdown_notebook\\frontend\\practice\\practice-makes-perfect\\src\\mini\\3-webpack\\src\\subtract.js': {
    dependencies: {},
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = subtract;\n\nfunction subtract(a, b) {\n  return a - b;\n}',
  },
})
