"use client"

import dynamic from "next/dynamic"
import { Suspense, useEffect, useMemo } from "react"
import { useLoader, useThree } from "@react-three/fiber"
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei"
import { Controllers } from "@react-three/xr"
import { Audio, AudioListener, AudioLoader } from "three"
import { SimulationLight } from "../lighting/light"
import Wrapper from "../utils/wrapper"
import { stairsLocate, toiletLocate, doorsLocate, singleDoorPos } from "../base/location"
import AllRooms from "./rooms"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
const Bigroom = dynamic(() => import('../model/Bigroom').then(mod => mod.Bigroom), { ssr: false })
const Cover = dynamic(() => import('../model/Cover').then(mod => mod.Cover), {ssr: false})
const Door = dynamic(() => import('../model/Doubledoor').then(mod => mod.Door), { ssr: false })
const Labs = dynamic(() => import('../model/Lab').then(mod => mod.Labs), { ssr: false })
const Labter = dynamic(() => import('../model/Labter').then(mod => mod.Labter), { ssr: false })
const Roof = dynamic(() => import('../model/Rooftop').then(mod => mod.Rooftop), {ssr: false})
const Stair = dynamic(() => import('../model/Stair').then(mod => mod.Stair), { ssr: false })
const SingleDoor = dynamic(() => import('../model/assets/SingleDoor').then(mod => mod.SingleDoor), { ssr: false })
const Toilet = dynamic(() => import('../model/Toilet').then(mod => mod.Toilet), { ssr: false })
const Views = dynamic(() => import('@/components/canvas/views'), { ssr: false })

export default function Simulation(props) {
  return (
    <Views styling='w-full h-full'>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 7, 8]} fov={55} far={25} />
        {props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />}
        <SimulationLight />
        <Wrapper>
          {props.mode === 'vr' && <Controllers rayMaterial='red' />}
          <Adam />
          <Labter />
          <Labs />
          {/* <Bigroom />
          <Cover />
          <Roof />
          <AllRooms /> */}

          {doorsLocate.map(door => (
            <Door key={door.id} position={door.position} rotation={door.rotation} />
          ))}
          {toiletLocate.map(toilet => (
            <Toilet key={toilet.id} position={toilet.position} rotation={toilet.rotation} />
          ))}
          {singleDoorPos.map((door, id) => (
            <SingleDoor key={id} position={door.position} rotation={door.rotation} />
          ))}
          {stairsLocate.map(stair => (
            <Stair key={stair.id} pos={stair.position} rot={stair.rotation} />
          ))}
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