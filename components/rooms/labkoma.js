"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { RigidBody } from "@react-three/rapier"
import { Plane } from "@react-three/drei"

const Computer = dynamic(() => import('../model/assets/Computer').then(mod => mod.Computer), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), { ssr: false })

export default function LabkomA() {
  return (
    <Suspense fallback={null}>
      {tablePosition[0].map(posX => (
        tablePosition[2].map((posZ, id) => (
          <TableDesk key={id} position={[posX, 5, posZ]} rotation={[0, -Math.PI / 2, 0]} />
        ))
      ))}
      <WhiteBoard position={[22.1261, 5, -5.29514]} scale={0.6} rotation-y={-Math.PI / 2} />
      {compPosition[0].map(posX => (
        compPosition[2].map((posZ, id) => (
          <Computer key={id} position={[posX, 6, posZ]} rotation-y={-Math.PI / 2} />
        ))
      ))}
      {chairPosition[0].map(posX => (
        chairPosition[2].map((posZ, id) => (
          <OfficeChair key={id} position={[posX, 5, posZ]} rotation-y={-Math.PI} />
        ))
      ))}
      <RigidBody colliders='hull' type='fixed'>
        <Plane args={[20, 20, 20]} rotation-x={-Math.PI / 2} position={[21.7127, 5, 1.98262]} receiveShadow>
          <meshStandardMaterial color='whitesmoke' />
        </Plane>
      </RigidBody>
    </Suspense>
  )
}

const tablePosition = [
  [25.6065, 24.2045, 22.8023, 20.6444, 19.2396, 17.8477,],
  [9.5,],
  [-3.33357, -1.6213, 0.195651, 2.70477, 4.50009, 6.33867],
]

const chairPosition = [
  [25.3782, 23.9682, 22.542, 20.4675, 19.0089, 17.6313],
  [9.5,],
  [-2.54355, -0.777023, 1.03813, 3.51766, 5.30033, 7.18023],
  Math.PI
]

const compPosition = [
  [25.3532, 23.9403, 22.5108, 20.4038, 18.9909, 17.578],
  [10.4697,],
  [6.23774, 4.37576, 2.58762, 0.086474, -1.72686, -3.43077],
  Math.PI / 2
]