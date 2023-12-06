"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { RigidBody } from "@react-three/rapier"
import { Plane } from "@react-three/drei"

const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })

export default function LabkomE() {
  return (
    <Suspense fallback={null}>
      {tablePosition.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} />
      ))}
      <GreyCabinet position={[25.899, 9.5, -34.34]} />
      {officeChairPos.map((chair, id) => (
        <OfficeChair key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
      <RigidBody colliders='hull' type='fixed'>
        <Plane args={[20, 20, 20]} rotation-x={-Math.PI / 2} position={[21.7127, 9.5, -30.4185]} receiveShadow>
          <meshStandardMaterial color='whitesmoke' />
        </Plane>
      </RigidBody>
    </Suspense>
  )
}

const tablePosition = [
  {
    position: [24.3923, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },

  {
    position: [22.5903, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },

  {
    position: [20.7883, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },
]

const officeChairPos = [
  {
    position: [25.1833, 9.5, -37.5438],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [25.1833, 9.5, -36.1375],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [25.1833, 9.5, -32.551],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [25.1833, 9.5, -31.1861],
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    position: [23.1833, 9.5, -37.5438],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [23.1833, 9.5, -36.1375],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [23.1833, 9.5, -32.551],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [23.1833, 9.5, -31.1861],
    rotation: [0, -Math.PI / 2, 0],
  },

  {
    position: [21.3, 9.5, -37.5438],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [21.3, 9.5, -36.1375],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [21.3, 9.5, -32.551],
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    position: [21.3, 9.5, -31.1861],
    rotation: [0, -Math.PI / 2, 0],
  },
]