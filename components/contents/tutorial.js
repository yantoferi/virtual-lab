"use client"

import dynamic from "next/dynamic"
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei"
import { Controllers } from "@react-three/xr"
import Wrapper from "../utils/wrapper"
import Experiences from "./experiences"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
const Room = dynamic(() => import('../model/Room').then(mod => mod.Room))
const RoomTV = dynamic(() => import('../model/RoomTV').then(mod => mod.RoomTV))
const Views = dynamic(() => import('@/components/canvas/views'))

export default function Tutorial(props) {
	return (
		<Views styling='w-full h-full'>
			<PerspectiveCamera makeDefault position={[0, 1, 2]} />
			<ambientLight color='white' intensity={2} />
			{/* <Environment files='../../public/hdr/cloudy.hdr' background /> */}
			{props.mode === 'fps' && <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />}
			<Wrapper>
				{props.mode === 'vr' && <Controllers rayMaterial='red' />}
				<Room />
				<Adam isLocked={props.locked} />
				<RoomTV />
				<Experiences />
			</Wrapper>
		</Views>
	)
}