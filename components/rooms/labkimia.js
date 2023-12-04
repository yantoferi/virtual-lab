"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const Cupboard = dynamic(() => import('../model/assets/CupboardDark').then(mod => mod.Cupboard), {ssr: false})
const ReadTable = dynamic(() => import('../model/assets/TableReading').then(mod => mod.TableReading), {ssr: false})
const WoodShelf = dynamic(() => import('../model/assets/WoodShelf').then(mod => mod.WoodShelf), {ssr: false})

export default function Chemistry() {
  return (
    <Suspense fallback={null}>
      {tableReadPos[0].map(posX => (
        tableReadPos[2].map((posZ, id) => (
          <ReadTable key={id} position={[posX, 5, posZ]} />
        ))
      ))}
      {woodShelfPos[0].map(posX => (
        woodShelfPos[2].map((posZ, id) => (
          <WoodShelf key={id} position={[posX, 5.90835, posZ]} />
        ))
      ))}
      {cupboardDark[0].map(posX => (
        cupboardDark[2].map((posZ, id) => (
          <Cupboard key={id} position={[posX, 5, posZ]} rotation-y={(id === 1) && -Math.PI} />
        ))
      ))}
    </Suspense>
  )
}

const tableReadPos = [
  [2.32788, 0.773489, -0.778313, -2.32753,],
  [5],
  [-4.40417, -1.50446, 1.39525, 4.29496]
]

const woodShelfPos = [
  [2.19388, 1.09219, -0.007842, -1.10787, -2.20625],
  [5.90835],
  [-4.40417, -1.50446, 1.39525, 4.29496]
]

const cupboardDark = [
  [-3.19055, -1.97646, -0.75912, 0.457183, 1.67014],
  [5],
  [7.95045, -7.92045],
]