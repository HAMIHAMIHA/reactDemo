/*
    App > Home + List + Detail
    react-router-dom中有两种模式： BrowserRouter(History模式) HashRouter(Hash模式)
*/

// import App from '../App'
import Home from '../pages/Home'
import List from '../pages/List'
import Detail from '../pages/Detail'
import Error from '../pages/Error'
import App2 from "../App2"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const BaseRouter = () =>
    (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App2 />}>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/list/:id" element={<List />}></Route>
                    <Route path="/detail" element={<Detail />}></Route>
                </Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </BrowserRouter>
    )
export default BaseRouter;

