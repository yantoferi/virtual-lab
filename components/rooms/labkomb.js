"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Computer = dynamic(() => import('../model/assets/Computer').then(mod => mod.Computer), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })
const WhiteBoard = dynamic(() => import('../model/assets/Whiteboard').then(mod => mod.Whiteboard), { ssr: false })

export default function LabkomB() {
  return (
    <Suspense fallback={null}>
      {tablePosition[0].map(posX => (
        tablePosition[2].map((posZ, id) => (
          <TableDesk key={id} position={[posX, 9.5, posZ]} rotation={[0, -Math.PI / 2, 0]} />
        ))
      ))}
      <WhiteBoard position={[22.1261, 9.5, -5.29514]} scale={0.8} rotation-y={-Math.PI / 2} />
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
  [-3.33357, -1.6213, 0.195651, 2.70477, 4.50009, 6.33867],
]

const chairPosition = [
  [25.3782, 23.9682, 22.542, 20.4675, 19.0089, 17.6313],
  [9.5,],
  [-2.54355, -0.777023, 1.03813, 3.51766, 5.30033, 7.18023],
  Math.PI
]

const compPosition = [
  [25.3532, 23.9403, 22.5108, 20.4038, 18.9909, 17.578],
  [10.4697,],
  [6.23774, 4.37576, 2.58762, 0.086474, -1.72686, -3.43077],
  Math.PI / 2
]