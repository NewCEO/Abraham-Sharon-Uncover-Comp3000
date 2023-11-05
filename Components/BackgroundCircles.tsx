"use client";
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
<motion.div 
initial={{
    opacity:0
}}
animate={{
    scale: [1,2,2,3,1],
    opacity:[0.1,0.2,0.4,0.8,]
}}
transition={{
    duration:5
}}
className='relative flex justify-center items-center '>
  <div className='absolute rounded-full h-[100px] w-[100px] xl:h-[100px] xl:w-[100px] mt-35 animate-spin' style={{border: '4px solid #104b53', borderBottom: 'none', animationDuration: '7s'}} />
  <div className='absolute rounded-full h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] mt-35 animate-spin' style={{border: '4px solid #104b53', borderBottom: 'none', animationDuration: '7s'}} />
  <div className='absolute rounded-full h-[300px] w-[300px] xl:h-[500px] xl:w-[500px] mt-35 animate-spin' style={{border: '4px solid #104b53', borderBottom: 'none', animationDuration: '7s'}} />
  <div className='absolute rounded-full h-[420px] w-[420px] xl:h-[700px] xl:w-[700px] mt-35 animate-spin' style={{border: '4px solid #104b53', borderBottom: 'none', animationDuration: '10s'}} />
</motion.div>

  
  )
}

export default BackgroundCircles