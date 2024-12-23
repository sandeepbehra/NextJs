'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter()
  return (
    <div><h1>This is Login Page</h1>
     <button onClick={()=>router.push('/')}>go back home</button><br></br><br></br>
     </div>
  )
}

export default Login