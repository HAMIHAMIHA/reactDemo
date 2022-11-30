import React from 'react'
//引入连接器
import {connect} from 'react-redux'

//在该页面获取数据num，就在状态映射里写num
function App(props) {
  return (
    <> 
      <h1>数字为：{props.num}</h1>
      <button onClick={()=>props.leijia()}>累加</button>
    </>
  )
}

// 状态映射，能自动获取state内容。将reducer中的state映射成props，让开发者可以在组件中使用props.num去调用state中的num
const mapStateToProps = (state) =>{
    return {
      num: state.num
    }
}

// 事件派发映射：将reducer中的事件映射成props，让开发者可以在组件中使用props.leijia()方法去实现num的累加。
const mapDispatchToProps = (dispatch) =>{
  return{
    leijia(){
        const action ={type:"addNum",value:2}
        dispatch(action)
      }  
    }
}

//export default connect(state映射，dispatch映射)(当前组件名称)
//连接器是一个高阶函数，因为它调用了一个函数之后又调用了一个函数。
//前面填映射，后面填组件名称。
export default connect(mapStateToProps,mapDispatchToProps)(App)