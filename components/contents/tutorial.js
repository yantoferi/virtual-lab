"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei"
import { Controllers } from "@react-three/xr"
import Wrapper from "../utils/wrapper"
import Experiences from "./experiences"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam), {ssr: false})
const Room = dynamic(() => import('../model/Room').then(mod => mod.Room), {ssr: false})
const RoomTV = dynamic(() => import('../model/RoomTV').then(mod => mod.RoomTV), {ssr: false})
const Views = dynamic(() => import('@/components/canvas/views'), {ssr: false})

export default function Tutorial(props) {
	return (
		<Views styling='w-full h-full'>
			<Suspense fallback={null}>
				<PerspectiveCamera makeDefault position={[0, 1, 2]} fov={55} far={20} />
				<ambientLight color='white' intensity={2} />
				{props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />}
				<Wrapper>
					{props.mode === 'vr' && <Controllers rayMaterial='red' />}
					<Room />
					<Adam isLocked={props.locked} pos={[0, 2, 0]} />
					<RoomTV />
					<Experiences />
				</Wrapper>
			</Suspense>
		</Views>
	)
}