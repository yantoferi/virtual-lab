"use client"

import { OrbitControls, PerspectiveCamera, Plane, PointerLockControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import Lighting from "../lighting/light"
import Wrapper from "../utils/wrapper"
import { RigidBody } from "@react-three/rapier"
import { Controllers } from "@react-three/xr"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
// const Cover = dynamic(() => import('../model/Cover').then(mod => mod.Cover))
// const Labs = dynamic(() => import('../model/Lab').then(mod => mod.Labs))
const Labter = dynamic(() => import('../model/Labter').then(mod => mod.Labter))
const Stair = dynamic(() => import('../model/Stair').then(mod => mod.Stair))
const Views = dynamic(() => import('@/components/canvas/views'))

export default function Simulation(props) {
  return (
    <Views styling='w-full h-full'>
      <PerspectiveCamera makeDefault position={[0, 2, 3]} />
      {props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />}
      {/* <OrbitControls /> */}
      <Lighting />
      <Wrapper>
        {props.mode === 'vr' && <Controllers rayMaterial='red' />}
        <Labter />
        {/* <Labs /> */}
        <Stair />
        <Adam isLocked={props.locked} />
        <RigidBody colliders='hull' type='fixed'>
          <Plane args={[50, 50]} receiveShadow rotation-x={-Math.PI / 2}>
            <meshPhysicalMaterial color='whitesmoke' />
          </Plane>
        </RigidBody>
      </Wrapper>
    </Views>
  )
}