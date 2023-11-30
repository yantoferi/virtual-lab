"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const ClassChair = dynamic(() => import('../model/assets/StudentChair').then(mod => mod.ClassChair), { ssr: false })

export default function KuliahUmum() {
  return (
    <Suspense fallback={null}>
      {chairPosition[2].map(posZ => (
        chairPosition[0].map((posX, id) => (
          <ClassChair key={id} position={[posX, 9.5, posZ]} />
        ))
      ))}
    </Suspense>
  )
}

const chairPosition = [
  [-3.83086, -2.5871, -1.3428, -0.090047, 1.15985, 2.39491, 3.65553],
  [9.5,],
  [
    4.83015, 3.73913, 2.67538, 1.61163, 0.356954, -0.815896, -1.93419, -3.13432, -4.44355,
    -10.9269, -11.9583, -13.0879, -14.1439, -15.163, -16.2435, -17.3486, -18.4537, -19.6693,
    -27.1321, -28.4092, -29.5266, -30.8236,
  ]
]