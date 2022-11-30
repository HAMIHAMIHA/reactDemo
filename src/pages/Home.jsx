import React from 'react'
//通过useSearchParams传递参数.
import {useSearchParams} from 'react-router-dom'

export default function Home() {
  const [searchParams] = useSearchParams()
  const id=searchParams.getAll('id')[0]
  return (
    <>
        <h1>首页Home - {id}</h1>
    </>
  )
}
