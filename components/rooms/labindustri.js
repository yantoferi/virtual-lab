"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const CabinetBook = dynamic(() => import('../model/assets/CabinetBook').then(mod => mod.CabinetBook), {ssr: false})
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), {ssr: false})
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const TableShelf = dynamic(() => import('../model/assets/TableShelf').then(mod => mod.TableShelf), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), {ssr: false})
const WoodShelf = dynamic(() => import('../model/assets/WoodShelf').then(mod => mod.WoodShelf), {ssr: false})

export default function Industri() {
  return (
    <Suspense fallback={null}>
      <GreyCabinet position={[25.7938, 5, -31.2161]} />
      <WhiteBoard position={[22.7892, 5, -37.8252]} rotation-y={-Math.PI/2} scale={0.8} />
      {tablePosition.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {fillCabinetPos.map((cab, id) => (
        <CabinetBook key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {tableLabPos.map((table, id) => (
        <TableShelf key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {woodShelfPos.map((shelf, id) => (
        <WoodShelf key={id} position={[...shelf.position]} />
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
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [22.7036, 5, -33.9901],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [20.87, 5, -34.6143],
    rotation: [0, 0, 0]
  },
  {
    position: [22.7036, 5, -34.6143],
    rotation: [0, 0, 0]
  },
]

const woodShelfPos = [
  {
    position: [20.1486, 6.21646, -34.147],
    rotation: [0, 0, 0]
  },
  {
    position: [21.2486, 6.21646, -34.147],
    rotation: [0, 0, 0]
  },
  {
    position: [22.3486, 6.21646, -34.147],
    rotation: [0, 0, 0]
  },

  {
    position: [20.1486, 6.21646, -34.4754],
    rotation: [0, 0, 0]
  },
  {
    position: [21.2486, 6.21646, -34.4754],
    rotation: [0, 0, 0]
  },
  {
    position: [22.3486, 6.21646, -34.4754],
    rotation: [0, 0, 0]
  },
]