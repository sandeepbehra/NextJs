'use client'
import React from 'react'
import { useRouter } from "next/navigation";

 const About = () => {
    const router = useRouter()
  return (
    <div> <h1>This is About Page</h1><br></br><br></br>
     <button onClick={()=>router.push('/')}>go back home</button><br></br><br></br>
   </div>
  )
}
export default About