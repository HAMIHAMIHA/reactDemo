import React from 'react'
// 引入react用于显示子路由的组件 
// 引入Link来代替href
// useLocation能够得到当前页面的链接
// 通过useNavigate跳转详情页
// index.js中只有一个Router组件好用

import {Outlet,Link,useLocation,useNavigate} from 'react-router-dom'
export default function App2() {
  const location = useLocation()
  console.log(location)
  console.log("pathname",location.pathname)

  // const navigate = useNavigate()
  // const goDetail = () =>{
  //   // 跳转详情页
  //   navigate('/detail')
  // }

  //跳转页面传入参数时，用下面两种方式传入的参数很有限。多个数据更适合用事件跳转的方式
  const navigate = useNavigate()
  const goDetail = () =>{
    navigate('/detail',{
      state:{username:'张三'}
    })
  }

  return (
    <>
       <h1>App2</h1>
       <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/list/123">列表页</Link></li>
          <li><Link to="/detail">详情页</Link></li>
          {/* <li><a href="/home?id=456">首页</a></li>
          <li><a href="/list/123">列表页</a></li>
          <li><a href="/detail">详情页</a></li> */}
       </ul>
       <button onClick={goDetail}>跳转详情页</button>
      <Outlet /> {/* 位置无所谓，只需要添加进去。 */}
    </>
  )
}
// vue显示子路由
// <router-view></router-view>