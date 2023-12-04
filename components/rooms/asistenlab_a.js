"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const CabinetClose = dynamic(() => import('../model/assets/CabinetClose').then(mod => mod.CloseCabinet), { ssr: false })
const ChairOffice = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), {ssr: false})
const FileCabinet = dynamic(() => import('../model/assets/CabinetBook').then(mod => mod.CabinetBook), {ssr: false})
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const SmartTv = dynamic(() => import('../model/assets/SmartTv').then(mod => mod.SmartTv), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), {ssr: false})

export default function AsistenLabA() {
  return (
    <Suspense fallback={null}>
      <CabinetClose position={[1.22339, 5, -24.8819]} rotation={[0, 0, 0]} />
      <SmartTv position={[0, 5, -31.5981]} />
      {greyCabinetPos.map((cab, id) => (
        <GreyCabinet key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {tableDeskPos.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {chairOfficePos.map((chair, id) => (
        <ChairOffice key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
      {fileCabinetPos.map((file, id) => (
        <FileCabinet key={id} position={[...file.position]} rotation={[...file.rotation]} />
      ))}
    </Suspense>
  )
}

const greyCabinetPos = [
  {
    position: [-4.04466, 5, -27.104],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [4.04026, 5, -27.6275],
    rotation: [0, 0, 0]
  },
]

const fileCabinetPos = [
  {
    position: [1.74719, 5, -31.7578],
    rotation: [0, 0, 0]
  },
  {
    position: [-1.76849, 5, -31.7578],
    rotation: [0, 0, 0]
  },
]

const tableDeskPos = [
  {
    position: [-3.05376, 5, -25.6903],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [-0.781756, 5, -25.6903],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [-3.25349, 5, -31.1081],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [-3.25349, 5, -29.2855],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [3.11556, 5, -31.1081],
    rotation: [0, 0, 0]
  },
  {
    position: [3.11556, 5, -29.2855],
    rotation: [0, 0, 0]
  },
]

const chairOfficePos = [
  {
    position: [-3.21955, 5, -24.8301],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [-0.947552, 5, -24.8301],
    rotation: [0, -Math.PI, 0]
  },

  {
    position: [-4.06843, 5, -31.3465],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [-4.06843, 5, -29.5239],
    rotation: [0, Math.PI/2, 0]
  },

  {
    position: [3.9874, 5, -30.9685],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [3.9874, 5, -29.1459],
    rotation: [0, -Math.PI/2, 0]
  },
]