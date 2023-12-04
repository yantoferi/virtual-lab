"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const OfficeChair = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), { ssr: false })
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), { ssr: false })

export default function LabkomE() {
  return (
    <Suspense fallback={null}>
      {tablePosition.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} />
      ))}
      <GreyCabinet position={[25.899, 9.5, -34.34]} />
    </Suspense>
  )
}

const tablePosition = [
  {
    position: [24.3923, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [24.3923, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },

  {
    position: [22.5903, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [22.5903, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },

  {
    position: [20.7883, 9.5, -37.634],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -36.232],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -32.6885],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    position: [20.7883, 9.5, -31.2865],
    rotation: [0, Math.PI / 2, 0]
  },
]