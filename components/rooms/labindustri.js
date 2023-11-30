"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), {ssr: false})

export default function Industri() {
  return (
    <Suspense fallback={null}>
      <GreyCabinet position={[25.899, 5, -34.34]} />
    </Suspense>
  )
}