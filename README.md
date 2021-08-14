<h1>一个不像是README的文档</h1>

它更像是踩坑日记。

- [已经遇到过的问题](#已经遇到过的问题)
  - [使用vercel部署，react-router跳转的页面会404](#使用vercel部署react-router跳转的页面会404)
  - [小球刷新率设置](#小球刷新率设置)
  - [Markdown文档解析](#markdown文档解析)
  - [主页评论](#主页评论)
  - [WebScoket](#webscoket)
  - [函数式组件里的回调函数里无法获取最新的state](#函数式组件里的回调函数里无法获取最新的state)
  - [悬浮球的移动（父组件调用子组件内部的方法）](#悬浮球的移动父组件调用子组件内部的方法)
  - [关于音乐播放器](#关于音乐播放器)
  - [渐显和渐隐](#渐显和渐隐)
  - [嵌入等比缩放的视频](#嵌入等比缩放的视频)
  - [antd design修改主题色](#antd-design修改主题色)
- [可能想问的问题](#可能想问的问题)
  - [如何更换头像？](#如何更换头像)
- [一些过程](#一些过程)
  - [小球的移动](#小球的移动)

## 已经遇到过的问题

### 使用vercel部署，react-router跳转的页面会404

stack overflow上有相关的解决方案：[Why does react-router not works at vercel?](https://stackoverflow.com/questions/64815012/why-does-react-router-not-works-at-vercel)

只需要将`vercel.json`对应的配置文件改成这样。通过正则，让所有的路径资源的请求都到`/`，使路由生效。

```json
{
    "routes": [
        {
            "src": "/[^.]+",
            "dest": "/",
            "status": 200
        }
    ]
}
```

### 小球刷新率设置

不同的显示器有不同的刷新率，使用`setInterval(callback, ms)`，60FPS的参数是`16.7ms`，而144FPS的参数是`7ms`。在实际渲染的过程中还会出现丢帧的情况。[[深入理解 requestAnimationFrame]](https://blog.csdn.net/VhWfR2u02Q/article/details/79492303)

为了更好的适应不同显示器的帧数，使用`window.requestAnimationFrame(callback)`。它能保证回调函数在屏幕每一次的刷新间隔中只被执行一次。

### Markdown文档解析

基础的文本用[markdown-it](https://github.com/markdown-it/markdown-it)，代码块的渲染用[higtlight.js](https://github.com/highlightjs/highlight.js)。

代码在：`/src/utils/markdown.ts`。组件在`/src/pages/Article`下，样式写得非常的丑，以后有空再改。

### 主页评论

这个是用本仓库的[issues](https://github.com/sanyuankexie/HelloKexie/issues/6)。知道了组织名、项目名和issue编号，通过[GitHub的API](https://docs.github.com/en/rest/reference/issues#list-issue-comments)来获取也不难。

### WebScoket

原本页面上的小球是可以在页面上发送消息的，因为没有将用户的登陆进行身份校验，也没有将用户发送的消息储存下来，所以直接砍掉了。

![image](https://user-images.githubusercontent.com/41776735/129320125-8e1358c0-a23c-4049-88be-d3fbb826dfa5.png)

`/src/hooks/useClient`这个hook采用了消息订阅的方法，负责将消息转发给的不同回调。如果服务端传来的消息没有被订阅，那么这个消息将会被忽略。

```js
useEffect(() => {
    // 连接上服务器，服务器会主动回传。
    setDeliverier({ "hello": handleHelloAction }); 

    // 当有人连接上服务器，服务器会向其它用户发送这个消息。
    setDeliverier({ "enter": handleEnterAction }); 

    // 当有人发送消息至服务器，服务器会向所有用户广播这个的消息。
    setDeliverier({ "talk": handleTalkAction });

    // 当有人移动的行为发送至服务器，服务器会向其他用户广播这个消息。
    setDeliverier({ "move": handleMoveAction });

    // 客户端可以向服务器请求当前在线用户的信息。
    setDeliverier({ "stand up": handleStandUpAction });

    // 用户下线，服务器会向其他用户广播这个消息。
    setDeliverier({ "leave": handleLeaveAction });
}, []);
```

### 函数式组件里的回调函数里无法获取最新的state

在`/src/component/BallRoom`里以各种`handle`开头的函数都有这个问题。这些回调被执行时，都获取不到最新的`userList`。这个问题产生的原因是闭包。

那么可以将获取的`userList`的方法放在ref里，这样每次这个方法都是最新的，获取到的`userList`也是最新的了。

```js
function BallRoom(){
    ......
    const userListRef = useRef();
    userListRef.current = () => userList;
    ......
    // 获取的方式
    const data = userListRef.current();
}
```

### 悬浮球的移动（父组件调用子组件内部的方法）

`Ball`组件是一个函数式组件，只能用hook的方法。[useImperativeHandle与forwardRef](https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle)

### 关于音乐播放器

没空，暂时搁置，所以`/src/App.tsx`中的组合 store 也暂时没用。而且现在的 reducer 设计非常有问题。

### 渐显和渐隐

用简单的话来说：

1. 将需要增加这个特效的组件想方设法加入到 redux 里，可以使用`useScrollAnimationRefs` （一个自定义的hook）的第一个参数，用法与 ref 一样。如果该组件无法 ref ，那只能手动添加。`/src/pages/Welcome/ContestList.tsx`里只能这样。
2. 选择一个容器组件，使用`useScrollHandler`（一个自定义的hook）作为监视器。

### 嵌入等比缩放的视频

参考博客：[使用iframe嵌入等比缩放的哔哩哔哩视频](https://blog.potatofield.cn/%E3%80%90%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0%E3%80%91%E4%BD%BF%E7%94%A8iframe%E5%B5%8C%E5%85%A5%E7%AD%89%E6%AF%94%E7%BC%A9%E6%94%BE%E7%9A%84%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9%E8%A7%86%E9%A2%91/)

在父类中，宽度被设为`100%`，高度被设为`0`，`padding-bottom`属性（外部下边距）被设为`75%`。因为当padding-bottom的值为百分比时，百分比计算的基准为父元素的宽。

这样，父类的实际宽高比（包含边距的宽高比）就变为了四比三。

于是子类宽高都`100%`、`position：relative`在里边撑开就可以了。

### antd design修改主题色

这个项目是从 create-react-app 迁移至 vite 的。修改主题色是用新的主题色去替换旧的主题色。（less 全局变量替换）[在vue3-vite中配置less的全局变量](https://segmentfault.com/a/1190000039736317)

需要配置这两个文件。`/vite.config.ts`，`/src/theme.less`。[antd design配置主题](https://ant.design/docs/react/customize-theme-cn#%E5%AE%9A%E5%88%B6%E6%96%B9%E5%BC%8F)

## 可能想问的问题

### 如何更换头像？

修改 local storage 中的 `user` 的 `avatar` 字段，用其它图片的链接替代。

![image](https://user-images.githubusercontent.com/41776735/129332006-8e376f7f-d491-4eff-b979-67a37780c0cb.png)

## 一些过程

### 小球的移动

其实单独抽离了一个 `Float` 组件出来，这个组件里所有子元素都能像小球一样移动。

> Float是用类组件的形式写的，写得非常的丑，有空可以重构一下。

可以注意到，小球不随着滚动条的滚动二变化位置，是因为它 `position:absolute;`。位置的移动本质上就是 `left` 和 `top` 的变化。

浏览器自带有 `mousedown` `mousemove` `mouseup` 这三个事件（触摸事件同理），抽象流程图如下。

![image](https://user-images.githubusercontent.com/41776735/129386201-e610b9ff-24b2-4b02-bf1b-abb51a2dd047.png)