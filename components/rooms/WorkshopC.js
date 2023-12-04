"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const CncMachine = dynamic(() => import('../model/assets/CncMachine').then(mod => mod.CncMachine), {ssr: false})

export default function WorkshopC() {
  return (
    <Suspense fallback={null}>
      <CncMachine position={[0, 0.12, 0]} />
    </Suspense>
  )
}