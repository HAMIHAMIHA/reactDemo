import React from 'react'
import ErrorImg from '../assets/404.jpg'

export default function Error() {
  return (
    <div>
        {/* 图片不能通过这种方式引入 */}
        {/* <img src="../assets/404.jpg" alt="" /> */}
        <img src={ErrorImg} alt="" />
    </div>
  )
}
