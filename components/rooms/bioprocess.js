"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Laminar = dynamic(() => import('../model/assets/AirFlow').then(mod => mod.Laminar), {ssr: false})
const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const CabinetClose = dynamic(() => import('../model/assets/CabinetClose').then(mod => mod.CloseCabinet), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const TableOffice = dynamic(() => import('../model/assets/TableOffice').then(mod => mod.TableOffice), {ssr: false})
const Microscope = dynamic(() => import('../model/assets/Microscope').then(mod => mod.Microscope), { ssr: false })
const WoodShelf = dynamic(() => import('../model/assets/WoodShelf').then(mod => mod.WoodShelf), {ssr: false})

export default function Bioprocess() {
  return (
    <Suspense fallback={null}>
      <Laminar position={[23.4458, 4.89652, -22.9061]} rotation={[0, -Math.PI, 0]} />
      <GreyCabinet position={[21.7127, 5, -22.7704]} rotation={[0, -Math.PI/2, 0]} />
      <CabinetClose position={[25.1567, 5, -22.737]} rotation={[0, 0, 0]} />
      <Microscope position={[25.6835, 5.91236, -29.2646]} rotation={[0, -Math.PI, 0]} scale={0.01} />
    </Suspense>
  )
}

const officeTablePos = [
  {
    position: [20.87, 5, -26.4627],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [22.7036, 5, -26.4627],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [20.87, 5, -25.8161],
    rotation: [0, 0, 0]
  },
  {
    position: [22.7036, 5, -25.8161],
    rotation: [0, 0, 0]
  },

  {
    position: [20.87, 5, -28.156],
    rotation: [0, 0, 0]
  },
  {
    position: [22.7036, 5, -28.156],
    rotation: [0, 0, 0]
  },
  {
    position: [20.87, 5, -28.8026],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [22.7036, 5, -28.8026],
    rotation: [0, -Math.PI, 0]
  },
]

const woodShelfPos = [
  {
    position: [21.7777, 5.91236, -26.3149],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -26.3149],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -26.3149],
    rotation: [0, 0, 0]
  },

  {
    position: [21.7777, 5.91236, -25.9865],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -25.9865],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -25.9865],
    rotation: [0, 0, 0]
  },

  {
    position: [21.7777, 5.91236, -28.6546],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -28.6546],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -28.6546],
    rotation: [0, 0, 0]
  },

  {
    position: [21.7777, 5.91236, -28.3246],
    rotation: [0, 0, 0]
  },
  {
    position: [20.6777, 5.91236, -28.3246],
    rotation: [0, 0, 0]
  },
  {
    position: [22.8777, 5.91236, -28.3246],
    rotation: [0, 0, 0]
  },
]

const tableDeskPos = [
  {
    position: [20.2833, 5, -22.8671],
    rotation: [0, -Math.PI, 0]
  },
  {
    position: [25.6835, 5, -29.2646],
    rotation: [0, -Math.PI/2, 0]
  },
]