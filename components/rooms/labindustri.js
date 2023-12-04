"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const CabinetBook = dynamic(() => import('../model/assets/CabinetBook').then(mod => mod.CabinetBook), {ssr: false})
const Helmet = dynamic(() => import('../model/assets/Helmet').then(mod => mod.Helmet), {ssr: false})
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), {ssr: false})
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const TableOffice = dynamic(() => import('../model/assets/TableOffice').then(mod => mod.TableOffice), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), {ssr: false})
const WoodShelf = dynamic(() => import('../model/assets/WoodShelf').then(mod => mod.WoodShelf), {ssr: false})

export default function Industri() {
  return (
    <Suspense fallback={null}>
      <GreyCabinet position={[25.7938, 5, -31.2161]} />
      <WhiteBoard position={[22.7892, 5, -37.8252]} rotation-y={-Math.PI/2} scale={0.6} />
      {tablePosition.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {fillCabinetPos.map((cab, id) => (
        <CabinetBook key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {tableLabPos.map((table, id) => (
        <TableOffice key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {woodShelfPos.map((shelf, id) => (
        <WoodShelf key={id} position={[...shelf.position]} />
      ))}
      {helmetPos.map((helm, id) => (
        <Helmet key={id} position={[...helm.position]} rotation={[...helm.rotation]} scale={0.015} />
      ))}
      {officeChairPos.map((chair, id) => (
        <OfficeChair key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const tablePosition = [
  {
    position: [18.092, 5, -30.9071],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [20.4398, 5, -30.9071],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [20.4398, 5, -38.0264],
    rotation: [0, -Math.PI/2, 0]
  },
]

const officeChairPos = [
  {
    position: [18.3191, 5, -31.6163],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6833, 5, -31.6163],
    rotation: [0, 0, 0]
  },
  {
    position: [20.2398, 5, -37.2044],
    rotation: [0, -Math.PI, 0]
  },
]

const fillCabinetPos = [
  {
    position: [25.5676, 5, -38.1751],
    rotation: [0, 0, 0]
  },
  {
    position: [24.8822, 5, -38.1751],
    rotation: [0, 0, 0]
  }
]

const tableLabPos = [
  {
    position: [20.87, 5, -33.9901],
    rotation: [0, 0, 0]
  },
  {
    position: [22.7036, 5, -33.9901],
    rotation: [0, 0, 0]
  },
  {
    position: [20.87, 5, -34.6143],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [22.7036, 5, -34.6143],
    rotation: [0, -Math.PI, 0]
  },
]

const woodShelfPos = [
  {
    position: [21.7777, 5.91236, -34.147],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -34.147],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -34.147],
    rotation: [0, 0, 0]
  },

  {
    position: [21.7777, 5.91236, -34.477],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -34.477],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -34.477],
    rotation: [0, 0, 0]
  },
]

const helmetPos = [
  {
    position: [23.1542, 6.5, -34.3524],
    rotation: [0, 0, 0],
  },
  {
    position: [22.7457, 6.5, -34.3524],
    rotation: [0, 0, 0],
  },
  {
    position: [22.276, 6.5, -34.3524],
    rotation: [0, 0, 0],
  },
]