"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Drone = dynamic(() => import('../model/assets/Drone').then(mod => mod.Drone), {ssr: false})
const MiniHouse = dynamic(() => import('../model/assets/MiniHouse').then(mod => mod.MiniHouse), {ssr: false})
const MiniApartement = dynamic(() => import('../model/assets/MiniApartement').then(mod => mod.MiniApartement), {ssr: false})
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const Plotter = dynamic(() => import('../model/assets/Plotter').then(mod => mod.Plotter), { ssr: false })
const ReadTable = dynamic(() => import('../model/assets/TableReading').then(mod => mod.TableReading), { ssr: false })
const TableOffice = dynamic(() => import('../model/assets/TableOffice').then(mod => mod.TableOffice), { ssr: false })

export default function DesignRoom() {
  return (
    <Suspense fallback={null}>
      <Drone position={[25.8987, 5.90889, -9.73929]} scale={0.2} />
      <MiniHouse position={[23.2154, 5.90835, -6.72468]} />
      <MiniApartement position={[20.9191, 5.90835, -6.72468]} />
      <OfficeChair position={[22.0905, 5, -21.8518]} />
      <Plotter position={[24.3425, 5, -6.77916]} />
      <TableOffice position={[22.0905, 5, -21.0715]} rotation-y={-Math.PI} />
      {tableReadPos.map((table, id) => (
        <ReadTable key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {labChairPos.map((chair, id) => (
        <OfficeChair key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const tableReadPos = [
  {
    position: [21.0565, 5, -18.9392],
    rotation: [0, 0, 0]
  },
  {
    position: [22.6083, 5, -18.9392],
    rotation: [0, 0, 0]
  },

  {
    position: [21.0565, 5, -15.0053],
    rotation: [0, 0, 0]
  },
  {
    position: [22.6083, 5, -15.0053],
    rotation: [0, 0, 0]
  },

  {
    position: [21.0565, 5, -11.0718],
    rotation: [0, 0, 0]
  },
  {
    position: [22.6083, 5, -11.0718],
    rotation: [0, 0, 0]
  },

  {
    position: [23.8675, 5, -18.9249],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.8675, 5, -17.3731],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.8675, 5, -14.9909],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.8675, 5, -13.4391],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.8675, 5, -11.0575],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.8675, 5, -9.50567],
    rotation: [0, Math.PI/2, 0]
  },

  {
    position: [19.7973, 5, -18.9249],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.7973, 5, -17.3731],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.7973, 5, -14.9909],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.7973, 5, -13.4391],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.7973, 5, -11.0575],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.7973, 5, -9.50567],
    rotation: [0, Math.PI/2, 0]
  },

  {
    position: [25.7926, 5, -9.73929],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [21.1961, 5, -6.72468],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.2154, 5, -6.72468],
    rotation: [0, Math.PI/2, 0]
  },
]

const labChairPos = [
  {
    position: [21.0855, 5, -17.9981],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [22.5955, 5, -17.9981],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [21.0855, 5, -14.0488],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [22.5955, 5, -14.0488],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [21.0855, 5, -10.0763],
    rotation: [0, Math.PI, 0]
  },
  {
    position: [22.5955, 5, -10.0763],
    rotation: [0, Math.PI, 0]
  },

  {
    position: [24.8489, 5, -18.8576],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [24.8489, 5, -17.4173],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [24.8489, 5, -15.071],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [24.8489, 5, -13.4448],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [24.8489, 5, -10.9823],
    rotation: [0, -Math.PI/2, 0]
  },
  {
    position: [24.8489, 5, -9.49552],
    rotation: [0, -Math.PI/2, 0]
  },

  {
    position: [18.8321, 5, -18.8576],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [18.8321, 5, -17.4173],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [18.8321, 5, -15.071],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [18.8321, 5, -13.4448],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [18.8321, 5, -10.9823],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [18.8321, 5, -9.49552],
    rotation: [0, Math.PI/2, 0]
  },
]