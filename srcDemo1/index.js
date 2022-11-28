//该文件是入口文件。
//文件是js或jsx都可以。如果是普通文件则用js，组件只能用jsx结尾。
import ReactDOM from 'react-dom'
import App from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'

// ReactDOM.render(组件名称，要注入的元素),入口文件直接写法。
// ReactDOM.render(
//     <div>
//         <h2>你好</h2>
//     </div>, //jsx语法
//     document.getElementById('root')
// )

ReactDOM.render(
    <>
        <App />
        <App1 />
        <App2 />
        <App3 />
    </>
    ,
    document.getElementById('root')
)