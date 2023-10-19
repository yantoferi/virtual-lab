"use client"

import Simulation from "@/components/contents/simulasi"
import { VRButton } from "@react-three/xr"

export default function SimulationVR() {
  return (
    <div className='w-full h-full bg-white relative'>
      <VRButton />
      <Simulation mode='vr' />
    </div>
  )
}