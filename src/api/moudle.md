###讲解 moudle 
##es6 的 import 与 export 的用法
##moudle export 和 import
1、导出
```js
// 写法一 和写法二完全相同

// a.js
export let a=function(){}
export let c={}
export let b=2
```
```js
//写法二
// a.js
let a=1
let b=2
export {a,b}
```
2.引用  只要看到export
```js
import {a,b} from 'a.js'
// 或者
import * as obj from 'a.js'
```

##moudle export 和 import
1.export default 后面可以跟具体的值
```js
//  a.js
 let a=1
 export default a
//  后者
  export default 1
  export {}
  function get (){}
   export default get
```
2.默认导出的引入
```js
 import xxx from 'a.js'
//  xxx 自己去命的名字
```

### 综合 export  与 export default 可以同时使用
```js
 //a.js
 export let a=1
 export default 2
```

```js
//   b.js
import {a} from 'a.js'
import xx from 'a.js'
// 可以用逗号作为分隔符，写在一起
import {a},xx from 'a.js'
```


写首页列表的请求 index.js  和数据渲染
 home.vue 用  