"use client"

import dynamic from 'next/dynamic'
import { Suspense, useContext, useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, PointerLockControls } from '@react-three/drei'
import Wrapper from '@/components/utils/wrapper'
import { SimulationLight } from '@/components/lighting/light'
import { ContextData } from '@/components/utils/context'
import { Controllers, VRButton } from '@react-three/xr'
import MyButton from "@/components/base/button"
import LabkomD from '@/components/rooms/labkomd'
import LabkomE from '@/components/rooms/labkome'
import WorkshopC from '@/components/rooms/WorkshopC'
import LabkomC from '@/components/rooms/labkomc'

const Adam = dynamic(() => import('@/components/model/Adam').then(mod => mod.Adam))
const SmallLab = dynamic(() => import('@/components/model/assets/SmallLab').then(mod => mod.SmallLab), { ssr: false })
const BigLab = dynamic(() => import('@/components/model/assets/BigLab').then(mod => mod.BigLab), { ssr: false })
const Views = dynamic(() => import('@/components/canvas/views'), { ssr: false })

export default function Laboratory() {
  const myContext = useContext(ContextData)

  useEffect(() => {
    console.log(myContext.state.mode)
    console.log(myContext.state.destination)
  })
  return (
    <div className='w-full h-full bg-white relative'>
      {myContext.state.mode === 'vr' ? <VRButton /> : <MyButton />}
      <Views styling='w-full h-full'>
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, 3, 4]} fov={55} />
          <SimulationLight position={[27, 15, -32.4185]} targetPos={[21.7127, 9.5, -30.4185]} />
          {myContext.state.mode === 'fps' && <PointerLockControls selector='#startFps' />}
          {/* <OrbitControls /> */}
          <Wrapper>
            {myContext.state.mode === 'vr' && <Controllers rayMaterial='red' />}
            {(() => {
              switch (myContext.state.destination) {
                case 'labkom_e':
                  return (
                    <>
                      <Adam position={[21.7127, 10.5, -32.4185]} />
                      <LabkomE />
                      <SmallLab position={[21.7127, 9.5, -30.4185]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'labkom_d':
                  return (
                    <>
                      <Adam position={[21.7127, 10.5, -28.4185]} />
                      <LabkomD />
                      <SmallLab position={[21.7127, 9.5, -30.4185]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )
                
                case 'labkom_c':
                  return (
                    <>
                      <Adam position={[21.7127, 10.5, -14.2114]} />
                      <LabkomC />
                      <BigLab position={[21.7127, 9.5, -14.2114]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )
                
                case 'workshop_c':
                  return (
                    <>
                      <Adam position={[0, 2, 0]} />
                      <WorkshopC />
                      <BigLab position={[0, 0.5, 0]} rotation={[0, 0, 0]} />
                    </>
                  )

                default:
                  return null
              }
            })()}
          </Wrapper>
        </Suspense>
      </Views>
    </div>
  )
}