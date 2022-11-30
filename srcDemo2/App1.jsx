//函数式组件的视图内容不能被直接修改，所以需要hook
import {useState} from 'react' //状态组件

let msg = "不能修改的视图内容"
let msg1 = "可以修改的视图内容"
let flag = true

const App1 = () =>{
    // Hook只能用在组件函数中的最顶层
    const [msgs,setMsgs] = useState(flag) //useState的形式是一个数组。
    const fn = () =>{
        msg='视图内容不能被直接修改'
        console.log(msg)
    }
    return(
        <>
            <h1>函数式组件</h1>
            <h1 onClick={fn}>{msg}</h1>
            <h1 onClick={()=>setMsgs(flag=!flag)}>{msgs?msg1:"使用useState这个hook进行修改"}</h1>
        </>
    )
}
//函数式组件没有state，不能使用state赋值，只能使用useState进行修改。
export default App1