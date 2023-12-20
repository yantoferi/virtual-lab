"use client"

import { Canvas } from "@react-three/fiber"
import { gate } from "../utils/tunnel"
import { Preload } from "@react-three/drei"

export default function Scene(props) {
  return (
    <Canvas shadows
      eventSource={props.source}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
      }}
      gl={{antialias: true}}
    >
      <gate.Out />
      <Preload all />
    </Canvas>
  )
}