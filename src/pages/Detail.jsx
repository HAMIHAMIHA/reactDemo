import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  let location = useLocation()
  return (
    <>
        <h1>Detail</h1>
        <h2>数据 - {location.state ? location.state.username : " "}</h2>
    </>
  )
}
