"use client"

import { useRef } from "react"
import Scene from "../canvas/scene"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ContextData } from "../utils/context"

export default function Template({ children }) {
  const parent = useRef(null)
  return (
    <div ref={parent} className='parent w-full h-screen relative'>
      <ContextData.Provider value={{ status: 'fps' }}>
        {children}
      </ContextData.Provider>
      <Scene source={parent} />
      <ToastContainer position='bottom-left' hideProgressBar style={{ zIndex: 10000 }} />
    </div>
  )
}