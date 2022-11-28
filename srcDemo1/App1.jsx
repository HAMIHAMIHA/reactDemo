import React from 'react'
const style={backgroundColor:'skyblue',color:'red'}
const arr=["大","中","小"]
class App1 extends React.Component{ //es6在这里表示构造函数。样式用className
    render(){
        return (
            <>
                <h2>第二个组件</h2>
                <hr />
                <label htmlFor="username">用户名：</label>
                <input type="text" id="username"/>
                <hr />
                <div className="box">类名用className</div>
                <div style={style}>样式用{'{}'},里面是{'{对象}'}</div>
                <div>注释用{'{/*注释内容*/}'}</div>
                <ul>
                    {
                        //React中的列表循环只有map可以使用
                        // 只有map才有返回值，forEach没有
                        arr.map((item,index)=>{
                            return <li key={index}>index:{index} content:{item}</li>
                        })

                    }

                </ul>
            </>
        )
    }
}

export default App1


