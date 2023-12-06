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
import LabkomB from '@/components/rooms/labkomb'
import Industri from '@/components/rooms/labindustri'
import Bioprocess from '@/components/rooms/bioprocess'
import LabkomA from '@/components/rooms/labkoma'
import KuliahUmum from '@/components/rooms/kuliahumum'
import LabkomNew from '@/components/rooms/labkomnew'
import AsistenLabB from '@/components/rooms/asistenlab_b'
import AsistenLabA from '@/components/rooms/asistenlab_a'
import PhysicLab from '@/components/rooms/labfisika'
import Chemistry from '@/components/rooms/labkimia'
import Lppm from '@/components/rooms/lppm'

const Adam = dynamic(() => import('@/components/model/Adam').then(mod => mod.Adam))
const InitialPlane = dynamic(() => import('@/components/model/assets/initialplane'), { ssr: false })
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
                      <Adam pos={[21.7127, 10.5, -32.4185]} />
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

                case 'labkom_b':
                  return (
                    <>
                      <Adam position={[21.7127, 10.5, 1.98262]} />
                      <LabkomB />
                      <BigLab position={[21.7127, 9.5, 1.98262]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'industri':
                  return (
                    <>
                      <Adam position={[21.7127, 7, -32.4185]} />
                      <Industri />
                      <SmallLab position={[21.7127, 5, -30.4185]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'bioprocess':
                  return (
                    <>
                      <Adam position={[21.7127, 7, -28.4185]} />
                      <Bioprocess />
                      <SmallLab position={[21.7127, 5, -30.4185]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'desain':
                  return (
                    <>
                      <Adam position={[21.7127, 7, -14.2114]} />
                      <LabkomA />
                      <BigLab position={[21.7127, 5, -14.2114]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'labkom_a':
                  return (
                    <>
                      <Adam position={[21.7127, 7, 1.98262]} />
                      <LabkomA />
                      <BigLab position={[21.7127, 5, 1.98262]} rotation={[0, -Math.PI, 0]} />
                    </>
                  )

                case 'teknologi_process':
                  return (
                    <>
                      <Adam position={[21.7127, 2, -14.2114]} />
                      <BigLab position={[21.7127, 0.5, -14.2114]} rotation={[0, -Math.PI, 0]} />
                      <InitialPlane position={[21.7127, 0.5, -14.2114]} />
                    </>
                  )

                case 'electronic':
                  return (
                    <>
                      <Adam position={[21.7127, 2, 1.98262]} />
                      <BigLab position={[21.7127, 0.5, 1.98262]} rotation={[0, -Math.PI, 0]} />
                      <InitialPlane position={[21.7127, 0.5, 1.98262]} />
                    </>
                  )

                case 'kultam_a':
                  return (
                    <>
                      <Adam position={[0, 11, 0]} />
                      <KuliahUmum />
                      <BigLab position={[0, 9.5, 0]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[0, 9.5, 0]} />
                    </>
                  )

                case 'kultam_b':
                  return (
                    <>
                      <Adam position={[0, 11, -16.2002]} />
                      <KuliahUmum />
                      <BigLab position={[0, 9.5, -16.2002]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[0, 9.5, -16.2002]} />
                    </>
                  )

                case 'kultam_c':
                  return (
                    <>
                      <Adam position={[0, 11, -28.4005]} />
                      <KuliahUmum />
                      <SmallLab position={[0, 9.5, -32.4005]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[0, 9.5, -32.4005]} />
                    </>
                  )

                case 'labkom_new':
                  return (
                    <>
                      <Adam position={[0, 11, -35.4005]} />
                      <LabkomNew />
                      <SmallLab position={[0, 9.5, -32.4005]} rotation={[0, 0, 0]} />
                    </>
                  )
                
                case 'aslab_b':
                  return (
                    <>
                      <Adam position={[0, 7, -35.4005]} />
                      <AsistenLabB />
                      <SmallLab position={[0, 5, -32.4005]} rotation={[0, 0, 0]} />
                    </>
                  )
                
                case 'aslab_a':
                  return (
                    <>
                      <Adam pos={[0, 7, -28.4005]} />
                      <AsistenLabA />
                      <SmallLab position={[0, 5, -32.4005]} rotation={[0, 0, 0]} />
                    </>
                  )

                case 'fisika':
                  return (
                    <>
                      <Adam position={[0, 7, -16.2002]} />
                      <PhysicLab />
                      <BigLab position={[0, 5, -16.2002]} rotation={[0, 0, 0]} />
                    </>
                  )
                
                case 'kimia':
                  return (
                    <>
                      <Adam position={[0, 7, 0]} />
                      <Chemistry />
                      <BigLab position={[0, 5, 0]} rotation={[0, 0, 0]} />
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
                
                case 'assembly':
                  return (
                    <>
                      <Adam position={[0, 2, -16.2002]} />
                      <BigLab position={[0, 0.5, -16.2002]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[0, 0.5, -16.2002]} />
                    </>
                  )
                
                case 'civil':
                  return (
                    <>
                      <Adam position={[0, 2, -32.397]} />
                      <BigLab position={[0, 0.5, -32.397]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[0, 0.5, -32.397]} />
                    </>
                  )
                
                case 'lppm':
                  return (
                    <>
                      <Adam position={[-4.44851, 7, 19.396]} />
                      <Lppm />
                      <BigLab position={[-4.44851, 5, 19.396]} rotation={[0, 0, 0]} />
                      <InitialPlane position={[-4.44851, 5, 19.396]} />
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