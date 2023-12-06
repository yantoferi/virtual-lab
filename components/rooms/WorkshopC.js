"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { RigidBody } from "@react-three/rapier"
import { Plane } from "@react-three/drei"

const CncMachine = dynamic(() => import('../model/assets/CncMachine').then(mod => mod.CncMachine), {ssr: false})
const DrillPress = dynamic(() => import('../model/assets/Drill_press').then(mod => mod.DrillPress), {ssr: false})
const LatheMachine = dynamic(() => import('../model/assets/Desk_lathe_animated').then(mod => mod.LatheMachine), {ssr: false})
const TableRead = dynamic(() => import('../model/assets/TableReading').then(mod => mod.TableReading), {ssr: false})

export default function WorkshopC() {
  return (
    <Suspense fallback={null}>
      <CncMachine position={[-2.0663, 0.8, 4]} scale={0.3} />
      <DrillPress position={[-4.50348, 1.25979, 0.158228]} scale={0.1} />
      <LatheMachine position={[-3.14039, 0.890086, 7.31312]} rotation={[0, -Math.PI, 0]} scale={1} />
      {tableReadPos.map((table, id) => (
        <TableRead key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      <RigidBody colliders='hull' type='fixed' position={[0, 0.5, 0]}>
        <Plane args={[20, 20, 20]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial color='whitesmoke' />
        </Plane>
      </RigidBody>
    </Suspense>
  )
}

const tableReadPos = [
  {position: [4.02509, 0.5, 1.16583], rotation: [0, Math.PI/2, 0]},
  {position: [4.02509, 0.5, 2.89401], rotation: [0, Math.PI/2, 0]},
  {position: [4.02509, 0.5, 4.55132], rotation: [0, Math.PI/2, 0]},
]