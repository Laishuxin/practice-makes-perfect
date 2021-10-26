# practice-makes-perfect

## 写在前面

### 文件规范

1. 文件名采用 hyphen 命名，也就是小写字母，单词与单词之间用 `-` 分割。
2. 文件名一律采用英文命名。

### 提交规范

1. 主分支只用于存放公共代码，不提供具体实现方式。
2. 每个人创建新分支进行解答。

### 如何测试

```sh
yarn test
# 或者，如果需要 watch
yarn test:watch
```

如果只想对某个案例进行测试，请使用：

```javascript
// 更多详情可以查看 jest 官网
describe.only()
```

**NOTE**: 测试用例需要自行编写。

### 其他

1. 前面含有 option 为可选题，可以根据自身情况和框架的使用情况实现。

## 手写原生函数

### JavaScript 基础

- [ ] : 手写 `Object.create`。
- [ ] : 手写 `instanceof` 方法
- [ ] : 手写 `new` 操作符
- [ ] : 手写节流函数
- [ ] : 手写防抖函数
- [ ] : 手写类型判断函数
- [ ] : 手写 `call` 函数
- [ ] : 手写 `apply` 函数
- [ ] : 手写 `bind` 函数
- [ ] : 实现浅拷贝
- [ ] : 实现深拷贝
- [ ] : (option - react) 实现浅比较(`shallowEqual`)。
- [ ] : (option - vue) 实现深比较(`looseEqual`)

### 数据处理

- [ ] : 实现日期格式化函数
- [ ] : 交换 a, b 的值，不能使用临时变量
- [ ] : 实现数组的乱序输出 (`shuffle`)
- [ ] : 实现数组求和（尽可能多的实现方式）
- [ ] : 实现数组扁平化 (`flatten`)
- [ ] : 实现 `Array.flatten`
- [ ] : 实现 `Array.map`
- [ ] : 实现 `Array.push`
- [ ] : 实现 `Array.filter`
- [ ] : 实现 `Array.repeat`
- [ ] : 实现 `Array.reverse`
- [ ] : 实现 `Array.reduce`
- [ ] : 实现 `Array.reduceRight`
- [ ] : 数组去重（多种方式，并说明优缺点）
- [ ] : 将数字每千分位用逗号隔开
- [ ] : 实现 `add(1)(2)(3)`
- [ ] : 将 URL Params 解析为对象

### Promise

- [ ] : 手写 Promise.then
- [ ] : 手写 Promise.all
- [ ] : 手写 Promise.race
- [ ] : (option) 手写 Promise A+

### 网络请求

- [ ] : 实现 `Ajx` 请求
- [ ] : 用 `Promise` 封装 `Ajax` 请求
- [ ] : 实现 `Promise` 缓存
- [ ] : 实现带有缓存失效的 `Promise` 缓存
- [ ] : 封装异步的 `fetch`，使用 `async await` 方式来使用。

### 函数式编程

- [ ] : 实现柯里化 `curry`
- [ ] : 实现偏函数 `partial`
- [ ] : 实现 `compose` (`redux`)
- [ ] : 实现 `pipeline`

### 场景应用

- [ ] : 循环打印红绿灯（2 种以上的实现方式）
- [ ] : 实现图片懒加载
  - [ ] : `IntersectionObserver`
  - [ ] : 根据滑动位置实现
- [ ] : 实现图片预加载
- [ ] : 实现时间切片
- [ ] : 实现虚链表
- [ ] : 用 `Promise` 实现图片的异步加载
- [ ] : 查找文章种出现频率最高的单词
- [ ] : 实现数据的双向绑定
- [ ] : 实现带缓存的 `fibonacci` 函数
- [ ] : 使用 `setTimeout` 实现 `setInterval`
- [ ] : 判断对象是否出现循环引用
- [ ] : 实现 `jsonp`
- [ ] : 实现观察者模式
- [ ] : 实现 `EventBus`

### utils

（可以参考 Vue2 源码中的 `util.js`）

- [ ] : 实现 `isObject`
- [ ] : 实现 `isPlainObject`
- [ ] : 实现 `toRawType`
- [ ] : 实现 `cache` (or `memoize`)
- [ ] : 实现 `camelize`
- [ ] : 实现 `hyphenate`
- [ ] : 实现 `extend`
- [ ] : 实现 `once`

### 小型 (mini) 框架

- [ ] : 实现一个前端路由
- [ ] : 实现一个 `Babel`
- [ ] : 实现一个 `Webpack`
- [ ] : 实现一个 `Rollup`
- [ ] : 实现一个 `Vite`
- [ ] : (option - vue) 实现一个 `Vue`
- [ ] : (option - react) 实现一个 `React`
- [ ] : (option - vue) 实现一个 `Vuex`
- [ ] : (option - react) 实现一个 `Redux`
- [ ] : (option - vue) 实现一个 `Vue Router`
- [ ] : (option - react) 实现一个 `React Router`

## 数据结构与算法

### 算法

- [ ] : 实现一个 LRU 算法。

## Reference

- [「2021」高频前端面试题汇总之手写代码篇](https://juejin.cn/post/6946136940164939813)
