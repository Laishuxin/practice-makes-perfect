# practice-makes-perfect

## 写在前面

### 文件规范

1. 文件名采用 hyphenate 命名，也就是小写字母，单词与单词之间用 `-` 分割。
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

- [x] : 手写 `Object.create`。
- [x] : 手写 `instanceof` 方法
- [x] : 手写 `new` 操作符
- [x] : 手写 `call` 函数
- [x] : 手写 `apply` 函数
- [x] : 手写 `bind` 函数
- [x] : 手写节流函数
  - [x] : 手写节流函数含 leading 和 trailing
- [x] : 手写防抖函数
  - [x] : 使用时间戳
  - [x] : 使用定时器
  - [x] : 使用时间戳 + 定时器
  - [x] : 手写防抖数含 leading 和 trailing
- [x] : 手写类型判断函数
- [x] : 实现浅拷贝
- [x] : 实现深拷贝
  - [x] : 实现深拷贝 - 深度优先
  - [x] : 实现深拷贝 - 广度优先
- [x] : (option - react) 实现浅比较(`shallowEqual`)。
- [x] : (option - vue) 实现深比较(`looseEqual`)

可以参考的资料：

- [冴羽的博客](https://github.com/mqyqingfeng/Blog)
- [「2021」高频前端面试题汇总之手写代码篇](https://juejin.cn/post/6946136940164939813)
- [shallowEqual](https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js)
- [looseEqual](https://github.com/vuejs/vue/blob/dev/src/shared/util.js)

### 数据处理

- [ ] : 实现日期格式化函数
- [ ] : 实现数组的乱序输出 (`shuffle`)
- [ ] : 实现数组扁平化 (`flatten`)
- [ ] : 实现 `Array.flatten`
- [ ] : 实现 `Array.map`
- [ ] : 实现 `Array.filter`
- [ ] : 实现 `Array.repeat`
- [ ] : 实现 `Array.reverse`
- [ ] : 实现 `Array.reduce`
- [ ] : 实现 `Array.reduceRight`
- [ ] : 数组去重（多种方式，并说明优缺点）
- [ ] : 将数字每千分位用逗号隔开
- [ ] : 实现 `add(1)(2)(3)`
- [ ] : 将 URL Params 解析为对象

可以参考的资料：

- [「2021」高频前端面试题汇总之手写代码篇](https://juejin.cn/post/6946136940164939813)

### Promise

- [ ] : 手写 `Promise.then`
- [ ] : 手写 `Promise.all`
- [ ] : 手写 `Promise.race`
- [ ] : (option) 手写 Promise A+

### 网络请求

- [ ] : 实现 `Ajax` 请求
- [ ] : 用 `Promise` 封装 `Ajax` 请求
- [ ] : 实现 `Promise` 缓存
- [ ] : 实现带有缓存时效的 `Promise` 缓存
- [ ] : 封装异步的 `fetch`，使用 `async await` 方式来使用。

### 函数式编程

- [ ] : 实现柯里化 `curry`
- [ ] : 实现偏函数 `partial`
- [ ] : 实现 `compose` (Redux)
- [ ] : 实现 `pipeline`

可以参考的资料：

- [JavaScript ES6 函数式编程入门经典](https://book.douban.com/subject/30180100/)
- [lodash](https://github.com/lodash/lodash)
- [compose](https://github.com/reduxjs/redux/blob/d794c56f78eccb56ba3c67971c26df8ee34dacc1/src/compose.ts)

### 场景应用

- [ ] : 循环打印红绿灯（2 种以上的实现方式）
- [ ] : 用 `Promise` 实现图片的异步加载
- [ ] : 实现观察者模式
- [ ] : 实现 `EventBus`
- [ ] : 查找文章种出现频率最高的单词
- [ ] : 实现数据的双向绑定
- [ ] : 实现带缓存的 `fibonacci` 函数
- [ ] : 使用 `setTimeout` 实现 `setInterval`
- [ ] : 判断对象是否出现循环引用
- [ ] : 实现 `jsonp`

### utils

（可以参考 Vue2 源码中的 `util.js`）

- [ ] : 实现 `isObject`
- [ ] : 实现 `isPlainObject`
- [ ] : 实现 `toRawType`
- [ ] : 实现 `cache` (or `memoize`)
- [ ] : 实现 `camelize`
- [ ] : 实现 `hyphenateRE`
- [ ] : 实现 `extend`
- [ ] : 实现 `once`

可以参考的资料：

- [Vue - util](https://github.com/vuejs/vue/blob/dev/src/shared/util.js)

## 小型 (mini) 框架

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
- [ ] : 实现一个 diff 算法

### webpack

- [手写 webpack - 天天造轮子](https://www.bilibili.com/video/BV1dV411p7gp?p=1)
- [做了一夜动画，让大家十分钟搞懂 Webpack](https://juejin.cn/post/6961961165656326152)
- [webpack 打包原理 ? 看完这篇你就懂了 !](https://juejin.cn/post/6844904038543130637#heading-11)
- [深入浅出 Webpack](https://webpack.wuhaolin.cn/w)

### 其他

- [学习源码整体架构系列](https://juejin.cn/column/6960551178908205093)
- [珠峰全栈架构课](https://space.bilibili.com/9418199/channel/detail?cid=86585)

## 数据结构与算法

### 算法

#### 前端常见算法

- [ ] : 实现一个 LRU 算法

可以参考的资料：

- [算法就像搭乐高：带你手撸 LRU 算法](https://labuladong.gitee.io/algo/2/18/38/)

#### 模型分类

##### 二分

- [LeetCode 暑期刷题打卡 2019——Week1 二分专题](https://www.bilibili.com/video/BV1Ft41157zW)
- [数据结构与算法 - 二分](https://laishuxin.github.io/blog_cs/cate/data-structure-and-algorithm/1_1-binary/)

习题：

- [ ] : [69. Sqrt(x)](https://leetcode-cn.com/problems/sqrtx/)
- [ ] : [35. Search Insert Position](https://leetcode-cn.com/problems/search-insert-position)
- [ ] : [34. Find First and Last Position of Element in Sorted Array](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [ ] : [74. Search a 2D Matrix](https://leetcode-cn.com/problems/search-a-2d-matrix)
- [ ] : [153. Find Minimum in Rotated Sorted Array](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
- [ ] : [33. Search in Rotated Sorted Array](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)
- [ ] : [278. First Bad Version](https://leetcode-cn.com/problems/first-bad-version)
- [ ] : [162. Find Peak Element](https://leetcode-cn.com/problems/find-peak-element)
- [ ] : [287. Find the Duplicate Number](https://leetcode-cn.com/problems/find-the-duplicate-number)
- [ ] : [275. H-Index II](https://leetcode-cn.com/problems/h-index-ii)

#### 剑指 offer

##### 链表

- [ ] : 003-从尾到头打印链表
- [ ] : 014-链表中倒数第 k 个结点
- [ ] : 015-反转链表
- [ ] : 016-合并两个或 k 个有序链表
- [ ] : 025-复杂链表的复制
- [ ] : 036-两个链表的第一个公共结点
- [ ] : 055-链表中环的入口结点
- [ ] : 056-删除链表中重复的结点

##### 树

- [ ] : 004-重建二叉树
- [ ] : 017-树的子结构
- [ ] : 018-二叉树的镜像
- [ ] : 022-从上往下打印二叉树
- [ ] : 023-二叉搜索树的后序遍历序列
- [ ] : 024-二叉树中和为某一值的路径
- [ ] : 026-二叉搜索树与双向链表
- [ ] : 038-二叉树的深度
- [ ] : 039-平衡二叉树
- [ ] : 057-二叉树的下一个结点
- [ ] : 058-对称的二叉树
- [ ] : 059-按之字形顺序打印二叉树
- [ ] : 060-把二叉树打印成多行
- [ ] : 061-序列化二叉树
- [ ] : 062-二叉搜索树的第 k 个结点
- [ ] : Stack & Queue
- [ ] : 005-用两个栈实现队列
- [ ] : 020-包含 min 函数的栈
- [ ] : 021-栈的压入、弹出序列
- [ ] : 044-翻转单词顺序列(栈)
- [ ] : 064-滑动窗口的最大值(双端队列)

##### 堆

- [ ] : 029-最小的 K 个数
- [ ] : Hash Table
- [ ] : 034-第一个只出现一次的字符

##### 图

- [ ] : 065-矩阵中的路径(BFS)
- [ ] : 066-机器人的运动范围(DFS)

##### 具体算法类题目

1. 斐波那契数列

- [ ] : 007-斐波拉契数列
- [ ] : 008-跳台阶
- [ ] : 009-变态跳台阶
- [ ] : 010-矩形覆盖

2. 搜索算法

- [ ] : 001-二维数组查找
- [ ] : 006-旋转数组的最小数字（二分查找）
- [ ] : 037-数字在排序数组中出现的次数（二分查找）

3. 全排列

- [ ] : 027-字符串的排列

4. 动态规划

- [ ] : 030-连续子数组的最大和
- [ ] : 052-正则表达式匹配(我用的暴力)

5. 回溯

- [ ] : 065-矩阵中的路径(BFS)
- [ ] : 066-机器人的运动范围(DFS)

6. 排序

- [ ] : 035-数组中的逆序对(归并排序)
- [ ] : 029-最小的 K 个数(堆排序)
- [ ] : 029-最小的 K 个数(快速排序)

7. 位运算

- [ ] : 011-二进制中 1 的个数
- [ ] : 012-数值的整数次方
- [ ] : 040-数组中只出现一次的数字

8. 其他算法

- [ ] : 002-替换空格
- [ ] : 013-调整数组顺序使奇数位于偶数前面
- [ ] : 028-数组中出现次数超过一半的数字
- [ ] : 031-整数中 1 出现的次数（从 1 到 n 整数中 1 出现的次数）
- [ ] : 032-把数组排成最小的数
- [ ] : 033-丑数
- [ ] : 041-和为 S 的连续正数序列(滑动窗口思想)
- [ ] : 042-和为 S 的两个数字(双指针思想)
- [ ] : 043-左旋转字符串(矩阵翻转)
- [ ] : 046-孩子们的游戏-圆圈中最后剩下的数(约瑟夫环)
- [ ] : 051-构建乘积数组

<!-- #### LeetCde Top 100 -->

## Reference

- [「2021」高频前端面试题汇总之手写代码篇](https://juejin.cn/post/6946136940164939813)

- [面试必刷-《剑指 offer》刷题小结](https://www.jianshu.com/p/53f6bf6f8d50)
