"use client"

import { PerspectiveCamera, Plane, PointerLockControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import Lighting from "../lighting/light"
import Wrapper from "../utils/wrapper"
import { RigidBody } from "@react-three/rapier"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
const Cover = dynamic(() => import('../model/Cover').then(mod => mod.Cover))
const Labs = dynamic(() => import('../model/Lab').then(mod => mod.Labs))
const Labter = dynamic(() => import('../model/Labter').then(mod => mod.Labter))
const Views = dynamic(() => import('@/components/canvas/views'))

export default function Simulation() {
  return (
    <Views styling='w-full h-full'>
      <PerspectiveCamera makeDefault position={[0, 2, 3]} />
      <PointerLockControls />
      <Lighting />
      <Wrapper>
        <Labter />
        <Labs />
        <Cover />
        <Adam />
        <RigidBody colliders='hull' type='fixed'>
          <Plane args={[50, 50]} receiveShadow rotation-x={-Math.PI / 2}>
            <meshPhysicalMaterial color='whitesmoke' />
          </Plane>
        </RigidBody>
      </Wrapper>
    </Views>
  )
}