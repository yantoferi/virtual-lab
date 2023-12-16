"use client"

import dynamic from "next/dynamic"
import { useRef, useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ContextData } from "../utils/context"

const Scene = dynamic(() => import('../canvas/scene'), {ssr: false})

export default function Template({ children }) {
  const parent = useRef(null)
  const [mode, setMode] = useState('fps')
  const [destination, setDestination] = useState('labkom_e')
  const changeMode = (defineMode) => {
    setMode(defineMode)
  }
  const changeDestination = (target) => {
    setDestination(target)
  }
  return (
    <div ref={parent} className='parent w-full h-screen relative'>
      <ContextData.Provider value={{ state: {mode, destination}, updated: changeMode, changedest: changeDestination}}>
        {children}
        <Scene source={parent} />
      </ContextData.Provider>
      <ToastContainer position='bottom-left' hideProgressBar style={{ zIndex: 10000 }} />
    </div>
  )
}