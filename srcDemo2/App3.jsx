// 父传子

import React, {useState,createContext} from 'react'

let msg = "「这是传递的内容」"
let a=1

// 子组件
const Child = (props) =>{
  return(
    <>
      <h2>{props.childtext} - 从父组件传递至<u><i>子组件</i></u>调用</h2>
      <h2>{props.tmsg} - 传递来可以变化的数字</h2>
      <button onClick={()=>{props.setTmsg(a++)}}><h2>数字加一</h2></button>
    </>
  )
}

// 父组件，调用子组件
const Father = (props) =>{
  return(
    <>
      <h2>{props.text} - 从顶级组件传递至<u><i>父组件</i></u>调用</h2>
      <h2>{props.tmsg} - 传递来可以变化的数字</h2>
      <Child childtext={props.text} setTmsg={props.setTmsg} tmsg={props.tmsg}/>
    </>
  )
}

// 顶级组件，调用父组件
const App3 = () =>{
  const [tmsg,setMsg] = useState(1)
  const setTmsg = (arg) => setMsg(arg)
  return(
    <>
      <Father text={msg} setTmsg={setTmsg} tmsg={tmsg}/>
    </>
  )
}

/* 
  无论是vue 小程序 还是react，所谓的子传父，真实在干活的都是父组件。
*/

export default App3