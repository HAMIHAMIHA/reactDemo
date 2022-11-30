//store是仓库文件方便后期管理。状态管理工具，类似于Vuex
//仓库的入口文件

//导入reducer
import reducer from './reducer'
//创建仓库
import {createStore} from 'redux'

const store = createStore(reducer)

//导出仓库
export default store;
