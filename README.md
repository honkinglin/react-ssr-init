# React SSR Init

### spa 与 ssr 差异
> 客户端渲染（spa）：React代码在浏览器上执行，消耗的是用户浏览器的性能
客户端渲染（spa）流程：
1. 服务器端返回 HTML
2. 发送HTMl给浏览器
3. 浏览器接收到内容展示
4. 浏览器加载JS文件
5. JS中的React代码在浏览器端执行
6. JS中的React代码接管页面操作
7. JS代码拿到浏览器上的地址
8. JS代码根据地址返回不同的路由内容

> 服务端渲染（ssr）：React代码在服务器上执行，消耗的是服务器端的性能
> 服务端渲染多了一个同构步骤
> 同构：一套React代码，在服务器端执行一次，在客户端再执行一次
服务端渲染（ssr）流程：
1. 服务器段运行 React 代码渲染出 HTML
2. 发送 HTML 给浏览器
3. 浏览器接收到内容展示
4. 浏览器加载 JS 文件
5. JS 中的 React 代码在浏览器端重新执行
6. JS 中的 React 代码接管页面操作

### 异步数据服务端渲染
由于初始store是没有数据的需要通过ajax获取，借助`react-router-config`库可以匹配到相应的路由跟需要渲染的子路由，这时候需要借助路由功能定义loadData字段，并且在相应页面文件中定义组件的静态函数loadData，之后调用loadData方法获取到渲染所需要的所有数据后添加到store中再一起返回给浏览器端

### store数据注水与脱水
注水：服务端异步获取到数据后将store数据通过`window.context = { state: ${JSON.stringify(store)} }`注入到页面中
脱水：浏览器初次加载页面后先从window中同步服务端获取到的store数据，并且在页面中获取数据的代码前加一层判断是否有值再决定获取

### 使用client -> node 中间层 -> api server架构
1. 将client层请求的api都用node中间层做转发，可以使用express-http-proxy代理转发到api server层
2. 区分开server端使用的axios与client端使用的axios配置
3. 使用redux-thunk中的withExtraArgument将serverAxios与clientAxios分别传入对应的createStore方法中
4. 到具体的action中可以通过第三个参数获取到具体的axios实例，此时已经区分开了server端请求与client端的请求
