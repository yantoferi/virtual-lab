"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Computer = dynamic(() => import('../model/assets/Computer').then(mod => mod.Computer), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), { ssr: false })

export default function LabkomC() {
  return (
    <Suspense fallback={null}>
      {tablePosition[0].map(posX => (
        tablePosition[2].map((posZ, id) => (
          <TableDesk key={id} position={[posX, 9.5, posZ]} rotation={[0, -Math.PI / 2, 0]} />
        ))
      ))}
      {compPosition[0].map(posX => (
        compPosition[2].map((posZ, id) => (
          <Computer key={id} position={[posX, 10.4697, posZ]} rotation-y={-Math.PI / 2} />
        ))
      ))}
    </Suspense>
  )
}

const tablePosition = [
  [25.6065, 24.2045, 22.8023, 20.6444, 19.2396, 17.8477,],
  [9.5,],
  [-19.5276, -17.6938, -15.813, -13.5259, -11.7391, -9.95233],
]

const chairPosition = [
  [25.3782, 23.9682, 22.542, 20.4675, 19.0089, 17.6313],
  [9.5,],
  [-2.54355, -16.8945, -14.9667, -12.7332, -10.9464, -9.11261],
  Math.PI
]

const compPosition = [
  [25.3532, 23.9403, 22.5108, 20.4038, 18.9909, 17.578],
  [10.4697,],
  [-10.065, -11.8584, -13.6237, -15.943, -17.7928, -19.6332],
  Math.PI/2
]