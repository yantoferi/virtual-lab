"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const CabinetClose = dynamic(() => import('../model/assets/CabinetClose').then(mod => mod.CloseCabinet), { ssr: false })
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const ReadTable = dynamic(() => import('../model/assets/TableReading').then(mod => mod.TableReading), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), { ssr: false })
const WoodShelf = dynamic(() => import('../model/assets/WoodShelf').then(mod => mod.WoodShelf), { ssr: false })

export default function PhysicLab() {
  return (
    <Suspense fallback={null}>
      <WhiteBoard position={[0, 5, -23.9169]} scale={0.6} />
      <CabinetClose position={[-2.04833, 5, -8.46838]} />
      {cabinetPos.map((cabinet, id) => (
        <GreyCabinet key={id} position={[...cabinet.position]} rotation={[...cabinet.rotation]} />
      ))}
      {tableReadPos[0].map(posX => (
        tableReadPos[2].map((posZ, id) => (
          <ReadTable key={id} position={[posX, 5, posZ]} />
        ))
      ))}
      {tableDeskPos.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {woodShelfPos[0].map(posX => (
        woodShelfPos[2].map((posZ, id) => (
          <WoodShelf key={id} position={[posX, 5.90835, posZ]} />
        ))
      ))}
      {officeChairPos.map((chair, id) => (
        <OfficeChair key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const tableReadPos = [
  [2.32788, 0.773489, -0.778313, -2.32753],
  [5],
  [-11.8867, -14.7864, -17.6861, -20.5748]
]

const tableDeskPos = [
  {
    position: [1.6906, 5, -8.58401],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [-0.453846, 5, -8.58401],
    rotation: [0, Math.PI / 2, 0]
  },
]

const officeChairPos = [
  {
    position: [-0.216936, 5, -9.39464],
    rotation: [0, 0, 0]
  },
  {
    position: [1.99015, 5, -9.39464],
    rotation: [0, 0, 0]
  }
]

const woodShelfPos = [
  [2.19388, 1.09219, -0.007842, -1.10787, -2.20625],
  [5.90835],
  [-11.8867, -14.7864, -17.6861, -20.5748]
]

const cabinetPos = [
  {
    position: [-3.53584, 5, -23.9169],
    rotation: [0, 0, 0]
  },
  {
    position: [-2.30754, 5, -23.9169],
    rotation: [0, 0, 0]
  },
  {
    position: [-3.53584, 5, -8.48353],
    rotation: [0, -Math.PI / 2, 0]
  },
]