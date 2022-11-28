import React from 'react'

 // 类组件.类App继承React里的Component方法.
// export default class App extends React.Component{ //也可以直接进行export
class App extends React.Component{
    render(){
        return ( //相当于把括号中的内容放到index.js组件中渲染。
            <div>
                <h2>你好世界</h2>
                <input type="text"/>
            </div>
        )
    }
 }

 export default App

 /*
 1.组件名要大写。
 2.JS中出现()代表其中想要写html
 3.JS中出现{}代表其中想要写js
 4.export default 可以写class前面
 5.
 */