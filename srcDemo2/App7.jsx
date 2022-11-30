// memo组件能够让父组件更新的时候子组件不更新
import React, {useState, memo, useCallback,useMemo} from "react"

//用memo套住子组件就不会更新了。但是memo只适用于纯静态的html。
//当组件有多层结构，且需要调用函数时，memo需要结合useCallback使用。
//useMemo跟useCallback的用法不同，但是功能相同。
const Child = memo((props) => {
    console.log(123)
    return (
        <>
            <h2>
                子组件
            </h2>
            <button onClick={()=>props.doSth()}>累加</button>
        </>
    )
})

// 函数中返回函数，高阶函数。
export default function App7(){
    const [num,setNum] = useState(1)
    // setNum((num)=>num+1) 不断使用新值覆盖旧值
    // const doSth = useCallback(()=>setNum((num)=>num+1),[])
    const doSth = useMemo(()=>{
        return ()=>setNum((num)=>num+1)
    },[])
    
    return(
        <div>
            <h1>App7</h1>
            <h3>数字为:{num}</h3>
            <button onClick={()=>setNum(num+1)}>累加</button>
            <hr/>
            <Child doSth={doSth}/>
        </div>
    )
}