import React from 'react'
//通过useParams传入参数
import { useParams } from 'react-router-dom'

export default function List() {
  const {id} =useParams()
  return (
    <>
        <h1>列表页List - {id} </h1>
    </>
  )
}
