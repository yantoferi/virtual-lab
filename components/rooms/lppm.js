"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

const GreyCabinet = dynamic(() => import('../model/assets/GreyCabinet').then(mod => mod.GreyCabinet), { ssr: false })
const ChairOffice = dynamic(() => import('../model/assets/OfficeChair').then(mod => mod.OfficeChair), {ssr: false})
const GlassTable = dynamic(() => import('../model/assets/GlassTable').then(mod => mod.GlassTable), {ssr: false})
const SingleSofa = dynamic(() => import('../model/assets/SingleSofa').then(mod => mod.SingleSofa), {ssr: false})
const LongSofa = dynamic(() => import('../model/assets/LongSofa').then(mod => mod.LongSofa), {ssr: false})
const TableRead = dynamic(() => import('../model/assets/TableReading').then(mod => mod.TableReading), {ssr: false})
const TableDesk = dynamic(() => import('../model/assets/TableDesk').then(mod => mod.TableDesk), {ssr: false})

export default function Lppm() {
  return (
    <Suspense fallback={null}>
      <GlassTable position={[4.41287, 5, 21.3639]} scale={0.45} />
      <LongSofa position={[5.70215, 5, 21.4241]} rotation={[0, -Math.PI/2, 0]} />
      {singleSofaPos.map((sofa, id) => (
        <SingleSofa key={id} position={[...sofa.position]} rotation={[...sofa.rotation]} />
      ))}
      {tableReadPos[0].map(posX => (
        tableReadPos[2].map((posZ, id) => (
          <TableRead key={id} position={[posX, 5, posZ]} rotation={[0, -Math.PI/2, 0]} />
        ))
      ))}
      {chairOfficePos[0].map((posX, index) => (
        chairOfficePos[2].map((posZ, id) => (
          <ChairOffice key={id} position={[posX, 5, posZ]} rotation={[0, chairOfficePos[3][index], 0]} />
        ))
      ))}
      {greyCabinetPos.map((cab, id) => (
        <GreyCabinet key={id} position={[...cab.position]} rotation={[...cab.rotation]} />
      ))}
      {tableDeskPos.map((table, id) => (
        <TableDesk key={id} position={[...table.position]} rotation={[...table.rotation]} />
      ))}
      {chairPos.map((chair, id) => (
        <ChairOffice key={id} position={[...chair.position]} rotation={[...chair.rotation]} />
      ))}
    </Suspense>
  )
}

const singleSofaPos = [
  {
    position: [4.38132, 5, 19.8651],
    rotation: [0, 0, 0]
  },
  {
    position: [4.42865, 5, 22.9732],
    rotation: [0, -Math.PI, 0]
  }
]

const tableReadPos = [
  [-4.71097, -5.67754],
  [5,],
  [20.8061, 22.3579, 23.9088, 25.4628, 27.0133]
]

const chairOfficePos = [
  [-3.76293, -6.78231],
  [5,],
  [20.3893, 21.2674, 22.1332, 23.0079, 23.8826, 24.7573, 25.632, 26.5067, 27.3814],
  [-Math.PI/2, Math.PI/2]
]

const chairPos = [
  {position: [-7.47816, 5, 32.3527], rotation: [0, 0, 0]},
  {position: [-5.20673, 5, 32.3527], rotation: [0, 0, 0]},
  {position: [6.44343, 5, 32.3527], rotation: [0, 0, 0]},
  {position: [3.96481, 5, 32.3527], rotation: [0, 0, 0]},
  {position: [-7.63089, 5, 35.4793], rotation: [0, Math.PI/2, 0]},
  {position: [-7.63089, 5, 38.336], rotation: [0, Math.PI/2, 0]},
  {position: [-7.63089, 5, 41.132], rotation: [0, Math.PI/2, 0]},
  {position: [-7.63089, 5, 43.9077], rotation: [0, Math.PI/2, 0]},
  {position: [-4.06502, 5, 44.009], rotation: [0, -Math.PI, 0]},
  {position: [-1.28932, 5, 44.009], rotation: [0, -Math.PI, 0]},
  {position: [1.54716, 5, 44.009], rotation: [0, -Math.PI, 0]},
  {position: [4.38365, 5, 44.009], rotation: [0, -Math.PI, 0]},
  {position: [6.76801, 5, 35.0503], rotation: [0, -Math.PI/2, 0]},
  {position: [6.76801, 5, 37.8282], rotation: [0, -Math.PI/2, 0]},
  {position: [6.76801, 5, 40.6061], rotation: [0, -Math.PI/2, 0]},
  {position: [6.76801, 5, 43.4071], rotation: [0, -Math.PI/2, 0]},
]

const tableDeskPos = [
  {position: [-7.27551, 5, 33.3339], rotation: [0, Math.PI/2, 0]},
  {position: [-4.9986, 5, 33.3339], rotation: [0, Math.PI/2, 0]},
  {position: [6.27551, 5, 33.3339], rotation: [0, Math.PI/2, 0]},
  {position: [3.6986, 5, 33.3339], rotation: [0, Math.PI/2, 0]},
  {position: [-6.72645, 5, 35.2767], rotation: [0, -Math.PI, 0]},
  {position: [-6.72645, 5, 38.081], rotation: [0, -Math.PI, 0]},
  {position: [-6.72645, 5, 40.8852], rotation: [0, -Math.PI, 0]},
  {position: [-6.72645, 5, 43.6894], rotation: [0, -Math.PI, 0]},
  {position: [-4.30046, 5, 43.1529], rotation: [0, -Math.PI/2, 0]},
  {position: [-1.49022, 5, 43.1529], rotation: [0, -Math.PI/2, 0]},
  {position: [1.31401, 5, 43.1529], rotation: [0, -Math.PI/2, 0]},
  {position: [4.11824, 5, 43.1529], rotation: [0, -Math.PI/2, 0]},
  {position: [5.72645, 5, 35.2767], rotation: [0, 0, 0]},
  {position: [5.72645, 5, 38.081], rotation: [0, 0, 0]},
  {position: [5.72645, 5, 40.8852], rotation: [0, 0, 0]},
  {position: [5.72645, 5, 43.6894], rotation: [0, 0, 0]},
]

const greyCabinetPos = [
  {position: [-2.74619, 5, 32.499], rotation: [0, 0, 0]},
  {position: [-2.74619, 5, 33.7314], rotation: [0, 0, 0]},
  {position: [1.89822, 5, 32.499], rotation: [0, -Math.PI, 0]},
  {position: [1.89822, 5, 33.7314], rotation: [0, -Math.PI, 0]},
]