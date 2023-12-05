"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Computer = dynamic(() => import('../model/assets/Computer').then(mod => mod.Computer), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })

export default function LabkomD() {
  return (
    <Suspense fallback={null}>
      {tablePosition.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {compPosition.map((comp, id) => (
        <Computer key={id} position={[...comp.position]} rotation={[...comp.rotation]} />
      ))}
      {officeChairPos.map((chair, id) => (
        <OfficeChair key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const tablePosition = [
  {
    position: [18.5097, 9.5, -25.5843],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.9118, 9.5, -25.5843],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.2756, 9.5, -25.5843],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.679, 9.5, -25.5843],
    rotation: [0, Math.PI/2, 0]
  },
  //
  {
    position: [18.5097, 9.5, -27.3296],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.9118, 9.5, -27.3296],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.2756, 9.5, -27.3296],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.679, 9.5, -27.3296],
    rotation: [0, Math.PI/2, 0]
  },
  //
  {
    position: [18.5097, 9.5, -28.9798],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [19.9118, 9.5, -28.9798],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.2756, 9.5, -28.9798],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.679, 9.5, -28.9798],
    rotation: [0, Math.PI/2, 0]
  },
]

const compPosition = [
  {
    position: [18.8179, 10.4697, -25.4797],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [20.1953, 10.4697, -25.4797],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.5823, 10.4697, -25.4797],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.9785, 10.4697, -25.4797],
    rotation: [0, Math.PI/2, 0]
  },
  //
  {
    position: [18.8179, 10.4697, -27.2233],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [20.1953, 10.4697, -27.2233],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.5823, 10.4697, -27.2233],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.9785, 10.4697, -27.2233],
    rotation: [0, Math.PI/2, 0]
  },
  //
  {
    position: [18.8179, 10.4697, -28.8654],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [20.1953, 10.4697, -28.8654],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [23.5823, 10.4697, -28.8654],
    rotation: [0, Math.PI/2, 0]
  },
  {
    position: [24.9785, 10.4697, -28.8654],
    rotation: [0, Math.PI/2, 0]
  },
]

const officeChairPos = [
  {
    position: [18.2619, 9.5, -26.3883],
    rotation: [0, 0, 0]
  },
  {
    position: [19.6865, 9.5, -26.3883],
    rotation: [0, 0, 0]
  },
  {
    position: [23.0776, 9.5, -26.3883],
    rotation: [0, 0, 0]
  },
  {
    position: [24.4557, 9.5, -26.3883],
    rotation: [0, 0, 0]
  },

  {
    position: [18.2619, 9.5, -28.0883],
    rotation: [0, 0, 0]
  },
  {
    position: [19.6865, 9.5, -28.0883],
    rotation: [0, 0, 0]
  },
  {
    position: [23.0776, 9.5, -28.0883],
    rotation: [0, 0, 0]
  },
  {
    position: [24.4557, 9.5, -28.0883],
    rotation: [0, 0, 0]
  },

  {
    position: [18.2619, 9.5, -29.7883],
    rotation: [0, 0, 0]
  },
  {
    position: [19.6865, 9.5, -29.7883],
    rotation: [0, 0, 0]
  },
  {
    position: [23.0776, 9.5, -29.7883],
    rotation: [0, 0, 0]
  },
  {
    position: [24.4557, 9.5, -29.7883],
    rotation: [0, 0, 0]
  },
]