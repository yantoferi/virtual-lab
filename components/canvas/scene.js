"use client"

import { Canvas } from "@react-three/fiber"
import { gate } from "../utils/tunnel"
import { Preload } from "@react-three/drei"

export default function Scene(props) {
  return (
    <Canvas shadows camera={{position: [0, 1, 1]}} eventSource={props.source}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        inset: 0,
      }}
    >
      <gate.Out />
      <Preload all />
    </Canvas>
  )
}