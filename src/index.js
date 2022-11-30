//仓库 和 路由

import { createRoot } from "react-dom/client"
//引入组件
import App from "./App"
import App2 from "./App2"
//引入提供者
import {Provider} from 'react-redux'
//引入仓库
import store from './store'

//引入路由
import Router from './router/index.jsx'
//引入路由组件
// import {BrowserRouter} from 'react-router-dom'



const root = createRoot(document.getElementById('root'))
root.render(
    <>
        {/* <Provider store={store}> */}
            {/* <App/> */}
            {/* <BrowserRouter>  */}
                {/* <App2/> */}
            {/* </BrowserRouter> */}
        {/* </Provider> */}
        <Router />
    </>
)