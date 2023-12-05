"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Computer = dynamic(() => import('../model/assets/Computer').then(mod => mod.Computer), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })

export default function LabkomNew() {
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
      {chairPosition[0].map(posX => (
        chairPosition[2].map((posZ, id) => (
          <OfficeChair key={id} position={[posX, 9.5, posZ]} rotation-y={-Math.PI} />
        ))
      ))}
    </Suspense>
  )
}

const tablePosition = [
  [-3.04221, -1.6401, 1.72367, 3.12709,],
  [9.5,],
  [-37.7167, -35.9221, -34.0619,],
]

const chairPosition = [
  [-3.2609, -1.87705, 1.46149, 2.89723,],
  [9.5,],
  [-36.9006, -35.1016, -33.2334,],
  Math.PI
]

const compPosition = [
  [-3.28654, -1.89793, 1.4647, 2.89416],
  [10.4697,],
  [-37.8243, -36.0409, -34.1711],
]