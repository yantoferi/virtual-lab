"use client"

import { useState } from "react"
import Simulation from "@/components/contents/simulasi"
import { TfiTarget } from "react-icons/tfi"
import MyButton from "@/components/base/button"

export default function SimulationFps() {
  const [isLock, setIsLock] = useState(false)

  const changeLocked = status => {
    setIsLock(status)
  }
  return (
    <div className='w-full h-full bg-white relative'>
      {isLock ? <div className='absolute left-1/2 top-1/2 -transform-y-1/2 -transform-x-1/2 z-10'>
        <TfiTarget className='w-6 h-6 text-sky-600' />
      </div> : <MyButton />}
      <Simulation mode='fps' updateIsLock={changeLocked} locked={isLock} />
    </div>
  )
}