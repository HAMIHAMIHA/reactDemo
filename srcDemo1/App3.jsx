import React, { Component } from 'react'

export default class App3 extends Component {
  render() {
    return (
      <div>
        <button onClick={this.btnClick.bind(this,1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this,2)}>按钮2</button>
      </div>
    )
  }
  btnClick(num){
    console.log(num)
  }
}
