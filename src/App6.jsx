 // 受控组件和不受控组件
 import React, {useState,useRef } from 'react'

 export default function App6(){
    const [value,setValue] = useState("asd")
    const inputChange = (e) =>{
        console.log(e.target.value)
    }
    const element = useRef(null)
    return(
        <>
            <h1>App6</h1>
            <h3>受控组件</h3>
            <input type="text" value={value} onChange={(e)=>{setValue(e.target.value);inputChange(e)}} />
            <button onClick={() =>{console.log(value)}}>获取input的值</button>
            <h3>不受控组件</h3>
            <input type="text" ref={element}/>
            <button onClick={()=>console.log(element.current.value)}>获取input的值</button>
            <div>只用于表单元素</div>
        </>
    )
 }

 /*
    受控组件和不受控组件只存在于表单元素。
    受控组件。表单元素的value需要通过state（或useState）来定义。输入值同时就能得到变化的值。
    不受控组件。表单元素的value无法通过state获取，只能使用ref（或useRef）来获取。只有点击按钮时才能够获得值。
 */