"use client"

import { Canvas } from "@react-three/fiber"
import { gate } from "../utils/tunnel"

export default function Scene(props) {
  return (
    <Canvas camera={{position: [0, 1, 1]}} eventSource={props.source}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        inset: 0,
      }}
    >
      <gate.Out />
    </Canvas>
  )
}