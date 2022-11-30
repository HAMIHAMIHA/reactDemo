//useEffect用于检测指定数据更新。
import { useState,useEffect } from 'react' //状态组件
let a=1,b=1
const App2 = () =>{
    const [msg,setMsg] = useState(a)
    const [msg1,setMsg1] = useState(b)
    
    //检测指定的数据更新，模拟updated。检测useState数组中的变量。
    useEffect(()=>{ // 不写数组检测所有变量的更新。写数组只检测写在其中的变量的更新。空数组就都不检测。
        console.log("检测到了数组中的变量msg更新。")
    },[msg])

    // 模拟beforeDestroy，在函数返回值里再返回一个函数
    // 当组件被销毁时触发。一般在这里处理脏数据或者垃圾回收。比如let msg=null。在这里可以改回来。
    useEffect(()=>{
        return ()=>{
            console.log("销毁阶段，当组件被销毁时触发。")
        }
    })
    return(
        <>
            <div style={{border:"1px solid black"}}>
                <h1>组件App2,10秒后会被销毁</h1>
                <h1 onClick={()=>{setMsg(a=a+1)}}>{msg}</h1>
                <h1 onClick={()=>{setMsg1(b=b+1)}}>{msg1}</h1>
            </div>
        </>
    )
}
export default App2

// 函数式组件没有生命周期，类组件有
/* 
    1.Vue的生命周期。 
        mounted  updated     beforeDestroy
        数据请求  检测数据更新  垃圾回收
    useEffect，模拟mounted
*/