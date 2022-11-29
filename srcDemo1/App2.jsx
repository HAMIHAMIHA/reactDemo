//数字累加

import React, { Component } from 'react'
// let num =1;
export default class App2 extends Component {
    // constructor(props){ //王者写法。
    //     super(props)
    //     this.state={
    //         num:1
    //     }
    // }
    state = {
        num:1
    }
  render() {

    return (
      <div>
        <h2>数字:{this.state.num}</h2>
        <button style={{display:"block",width:"300px",padding:"0 20px",height:"50px",fontSize:"30px"}} 
        onClick={()=>{this.setState({num: this.state.num+1})
            console.log(this.state.num)}
            }>通过this.state累加</button>
        <button style={{display:"block",width:"300px",height:"50px",fontSize:"30px"}} onClick={ this.addNum.bind(this)  //bind把addNum指向this 
        }>调用函数方式1</button>
        <button style={{display:"block",width:"300px",height:"50px",fontSize:"30px"}} onClick={()=>{ this.addNum()  // 这样加()不会直接调用函数
        }}>调用函数方式2</button>
      </div>
    )
  }
  addNum(){
    console.log("???",this.state.num)
    this.setState({num: this.state.num+1})
  }
}

/*
    小程序使用 data->setData 
    react使用 state->setState
*/

// class Person{  //构造器
//     constructor(name){
//         this.name = name;
//     }
//     sayName(){
//         console.log(this.name)
//     }
// }

// let p =new Person("张三")
// p.sayName(); //张三