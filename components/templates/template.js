"use client"

import { useRef, useState } from "react"
import Scene from "../canvas/scene"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ContextData } from "../utils/context"

export default function Template({ children }) {
  const parent = useRef(null)
  const [mode, setMode] = useState('fps')
  const changeMode = (defineMode) => {
    setMode(defineMode)
  }
  return (
    <div ref={parent} className='parent w-full h-screen relative'>
      <ContextData.Provider value={{ mode, updated: changeMode }}>
        {children}
        <Scene source={parent} />
      </ContextData.Provider>
      <ToastContainer position='bottom-left' hideProgressBar style={{ zIndex: 10000 }} />
    </div>
  )
}