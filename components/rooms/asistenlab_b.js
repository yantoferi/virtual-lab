"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const ChairOffice = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), {ssr: false})
const CabinetClose = dynamic(() => import('../model/assets/CabinetClose').then(mod => mod.CloseCabinet), { ssr: false })
const FileCabinet = dynamic(() => import('../model/assets/CabinetBook').then(mod => mod.CabinetBook), {ssr: false})
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), {ssr: false})

export default function AsistenLabB() {
  return (
    <Suspense fallback={null}>
      <CabinetClose position={[1.22339, 5, -39.8505]} rotation-y={-Math.PI} />
      <WhiteBoard position={[0, 5, -33.1343]} scale={0.6} rotation={[0, Math.PI/2, 0]} />
      {greyCabinetPos.map((cab, id) => (
        <GreyCabinet key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {fileCabinetPos.map((cab, id) => (
        <FileCabinet key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {tableDeskPos.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {chairOfficePos.map((chair, id) => (
        <ChairOffice key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const greyCabinetPos = [
  {
    position: [-4.04466, 5, -37.6284],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [4.04026, 5, -37.1049],
    rotation: [0, 0, 0]
  },
]

const fileCabinetPos = [
  {
    position: [1.74719, 5, -32.9746],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [-1.76849, 5, -32.9746],
    rotation: [0, -Math.PI, 0]
  },
]

const tableDeskPos = [
  {
    position: [-3.05376, 5, -39.0421],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [-0.781756, 5, -39.0421],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [-3.25349, 5, -33.6243],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [-3.25349, 5, -35.4469],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [3.11556, 5, -33.6243],
    rotation: [0, 0, 0]
  },
  {
    position: [3.11556, 5, -35.4469],
    rotation: [0, 0, 0]
  },
]

const chairOfficePos = [
  {
    position: [-3.21955, 5, -39.9023],
    rotation: [0, 0, 0]
  },
  {
    position: [-0.947552, 5, -39.9023],
    rotation: [0, 0, 0]
  },

  {
    position: [-4.06843, 5, -34],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [-4.06843, 5, -35.7],
    rotation: [0, Math.PI/2, 0]
  },

  {
    position: [3.9874, 5, -33.3],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [3.9874, 5, -35.2],
    rotation: [0, -Math.PI/2, 0]
  },
]