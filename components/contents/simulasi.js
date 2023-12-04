"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { Cylinder, Environment, OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei"
import { Controllers } from "@react-three/xr"
import { CylinderCollider, RigidBody } from "@react-three/rapier"
import { Audio, AudioListener, AudioLoader } from "three"
import { SimulationLight } from "../lighting/light"
import Wrapper from "../utils/wrapper"
import { stairsLocate, toiletLocate, doorsLocate } from "../base/location"
import WorkshopC from "../rooms/WorkshopC"

// const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
// const Bigroom = dynamic(() => import('../model/Bigroom').then(mod => mod.Bigroom), {ssr: false})
// const Cover = dynamic(() => import('../model/Cover').then(mod => mod.Cover), {ssr: false})
// const Door = dynamic(() => import('../model/Doubledoor').then(mod => mod.Door), {ssr: false})
const Labs = dynamic(() => import('../model/Lab').then(mod => mod.Labs), {ssr: false})
// const Labter = dynamic(() => import('../model/Labter').then(mod => mod.Labter), {ssr: false})
// const Roof = dynamic(() => import('../model/Rooftop').then(mod => mod.Rooftop), {ssr: false})
// const Stair = dynamic(() => import('../model/Stair').then(mod => mod.Stair), {ssr: false})
// const Toilet = dynamic(() => import('../model/Toilet').then(mod => mod.Toilet), {ssr: false})
const Views = dynamic(() => import('@/components/canvas/views'), {ssr: false})

export default function Simulation(props) {
  return (
    <Views styling='w-full h-full'>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 7, 8]} fov={55} far={30} />
        {/* {props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />} */}
        <OrbitControls />
        <SimulationLight />
        {/* <Environment files='hdr/cloudy.hdr' background /> */}
        <Wrapper>
          {props.mode === 'vr' && <Controllers rayMaterial='red' />}
          {/* <Adam /> */}
          {/* <Labter /> */}
          <Labs />
          <WorkshopC />
          {/* {doorsLocate.map(door => (
            <Door key={door.id} position={door.position} rotation={door.rotation} />
          ))}
          {toiletLocate.map(toilet => (
            <Toilet key={toilet.id} position={toilet.position} rotation={toilet.rotation} />
          ))} 
          {stairsLocate.map(stair => (
            <Stair key={stair.id} pos={stair.position} rot={stair.rotation} />
          ))} */}
        </Wrapper>
      </Suspense>
    </Views>
  )
}

function Sounds() {
  const listener = useMemo(() => new AudioListener(), [])
  const audio = useMemo(() => new Audio(listener), [])
  const bufferAudio = useLoader(AudioLoader, '/audio/Reaching-Out.mp3')

  const { camera } = useThree()

  useEffect(() => {
    camera.add(listener)
    audio.setBuffer(bufferAudio)
    audio.setLoop(true)
    audio.play()

    return () => audio.stop()
  }, [])
  return (
    <group />
  )
}

function Welder() {
  const origin = useRef(null)
  useFrame((state) => {
    const adam = state.scene.getObjectByName('Adam')
    if (adam) {
      origin.current.position.copy(adam.position)
      origin.current.rotation.copy(state.camera.rotation)
    }
  }, 15)
  return (
    <group ref={origin}>
      <Cylinder args={[0.01, 0.01, 0.05]} position={[0.03, 0.31, -0.27]} rotation={[Math.PI / 2, 0, -Math.PI / 6]}>
        <meshBasicMaterial color='brown' />
      </Cylinder>
    </group>
  )
}

function Pipes(props) {
  const [isDynamic, setIsDynamic] = useState(false)
  return (
    <RigidBody {...props} colliders={false} type={isDynamic ? 'dynamic' : 'kinematicPosition'} rotation-z={-Math.PI / 2} mass={5} restitution={0.8}>
      <CylinderCollider args={[0.055, 0.02]} />
      <Cylinder args={[0.02, 0.02, 0.1]} position-y={-0.005}>
        <meshBasicMaterial color='green' />
      </Cylinder>
      <Cylinder args={[0.022, 0.022, 0.01]} position-y={0.05} onClick={() => setIsDynamic(!isDynamic)}>
        <meshBasicMaterial color='blue' />
      </Cylinder>
    </RigidBody>
  )
}