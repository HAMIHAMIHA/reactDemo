//react17
// import ReactDOM from 'react-dom'
// import App from './App'
// ReactDOM.render(
//     <>
//         <App/>
//     </>,
//     document.getElementById('root')
// )
//react18
import { createRoot } from "react-dom/client"
import App from './App'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
import App7 from './App7'


// createRoot(document.getElementById('root')).render(<App/>)   //简写
// const container = document.getElementById('root')
// const root = createRoot(container)r
const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <App/>
        <App1/>
        <App2/>
        <App3/>
        <App4/>
        <App5/>
        <App6/>
        <App7/>
    </>
)

setTimeout(()=>{
    root.render(
        <>
            <App/>
            <App1/>
            <h1 style={{color:"red"}}>组件App2被销毁了</h1>
            <App3/>
            <App4/>
            <App5/>
            <App6/>
            <App7/>
        </>
    )
},10000)