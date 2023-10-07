"use client"

import { useRef } from "react"
import Scene from "../canvas/scene"

export default function Template({ children }) {
  const parent = useRef(null)
  return (
    <div ref={parent} className='parent w-full h-screen bg-[#151515] relative'>
      {children}
      <Scene source={parent} />
    </div>
  )
}