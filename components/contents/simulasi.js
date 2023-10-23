"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { OrbitControls, PerspectiveCamera, Plane, PointerLockControls } from "@react-three/drei"
import { SimulationLight } from "../lighting/light"
import Wrapper from "../utils/wrapper"
import { RigidBody } from "@react-three/rapier"
import { Controllers } from "@react-three/xr"
import DoorLocation from '../../public/location/doorlocation.json'

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
const Cover = dynamic(() => import('../model/Cover').then(mod => mod.Cover))
const Door = dynamic(() => import('../model/Door').then(mod => mod.Door))
const Labs = dynamic(() => import('../model/Lab').then(mod => mod.Labs))
const Labter = dynamic(() => import('../model/Labter').then(mod => mod.Labter))
// const Roof = dynamic(() => import('../model/Rooftop').then(mod => mod.Rooftop))
// const Stair = dynamic(() => import('../model/Stair').then(mod => mod.Stair))
// const Tables = dynamic(() => import('../model/Table').then(mod => mod.Tables))
// const Lands = dynamic(() => import('../model/Lands').then(mod => mod.Lands))
const Views = dynamic(() => import('@/components/canvas/views'))

export default function Simulation(props) {
  return (
    <Views styling='w-full h-full'>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 2, 3]} />
        {/* {props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />} */}
        <OrbitControls />
        <SimulationLight />
        {/* <Environment files='hdr/cloudy.hdr' background /> */}
        <Wrapper>
          {props.mode === 'vr' && <Controllers rayMaterial='red' />}
          <Labter />
          <Cover />
          <Labs />
          <Adam isLocked={props.locked} />
          {DoorLocation.map(datas => datas.data.map(item => {
            const yAxes = item.y
            const zAxes = item.z
            return item.x.map((pos, index) => (
              <Door key={index} position={[pos, yAxes, zAxes]} rigidX={pos} />
            ))
          }))}
          {/* <RigidBody colliders='hull' type='fixed'>
            <Plane args={[50, 50]} receiveShadow rotation-x={-Math.PI / 2} position-y={0.3}>
              <meshPhysicalMaterial color='whitesmoke' />
            </Plane>
          </RigidBody> */}
        </Wrapper>
      </Suspense>
    </Views>
  )
}