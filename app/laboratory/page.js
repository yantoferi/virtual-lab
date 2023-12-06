"use client"

import dynamic from 'next/dynamic'
import { Suspense, useContext, useEffect } from 'react'
import { OrbitControls, PerspectiveCamera, PointerLockControls } from '@react-three/drei'
import LabkomE from '@/components/rooms/labkome'
import Wrapper from '@/components/utils/wrapper'
import { SimulationLight } from '@/components/lighting/light'
import { ContextData } from '@/components/utils/context'
import { Controllers, VRButton } from '@react-three/xr'
import MyButton from "@/components/base/button"

const Adam = dynamic(() => import('@/components/model/Adam').then(mod => mod.Adam))
const Views = dynamic(() => import('@/components/canvas/views'), { ssr: false })

export default function Laboratory() {
  const myContext = useContext(ContextData)

  useEffect(() => {
    console.log(myContext.mode)
  })
  return (
    <div className='w-full h-full bg-white relative'>
      {myContext.mode === 'vr'? <VRButton />:<MyButton />}
      <Views styling='w-full h-full'>
        <Suspense fallback={null}>
          <PerspectiveCamera position={[0, 3, 4]} fov={55} />
          <SimulationLight position={[23, 15, -32.4185]} targetPos={[21.7127, 9.5, -30.4185]} />
          {myContext.mode === 'fps' && <PointerLockControls selector='#startFps' />}
          {/* <OrbitControls /> */}
          <Wrapper>
            {myContext.mode === 'vr' && <Controllers rayMaterial='red' />}
            <Adam position={[21.7127, 10.5, -30.4185]} />
            <LabkomE />
          </Wrapper>
        </Suspense>
      </Views>
    </div>
  )
}