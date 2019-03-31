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