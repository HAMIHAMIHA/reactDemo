// 爷传孙。使用NumContext。

import React,{useState,createContext} from 'react'

let a=1

// 创建上下文空间(Provider提供者，Consumer消费者),用于爷传子
const NumContext = createContext()

// 子组件
const Child = () =>{/* 提供者通过value传入想要传入的值。 */
  return(
    <>
      <NumContext.Consumer> 
        {
          ({tmsg,setMsg})=>{
            return(
              <>
                <h2>Block4</h2>
                <h2>{tmsg} - 从爷爷传过来的数据</h2>
                <button onClick={()=>{setMsg(a=a+1)}}>数字加一</button>
              </>
            ) 
          }
        }
      </NumContext.Consumer>
    </>
  )
}

// 父组件，用于爷传孙
const Father = () => <Child />

// 顶级组件。调用父组件
const App4 = () =>{
  const [tmsg,setMsg] = useState(1)
  //提供者通过value传入想要传入的值。
  return(
    <>
      <NumContext.Provider value={{tmsg,setMsg}}> 
          <Father /> {/* 组件必须包含在里面才能共享这个数据。 */}
      </NumContext.Provider>
    </>
  )
}

/* 
  无论是vue 小程序 还是react，所谓的子传父，真实在干活的都是父组件。
*/

export default App4