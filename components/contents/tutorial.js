"use client"

import { Environment, OrbitControls, PerspectiveCamera, PointerLockControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import Wrapper from "../utils/wrapper"

const Adam = dynamic(() => import('../model/Adam').then(mod => mod.Adam))
const Room = dynamic(() => import('../model/Room').then(mod => mod.Room))
const Views = dynamic(() => import('@/components/canvas/views'))

export default function Tutorial(props) {
	return (
		<Views styling='w-full h-full'>
			<PerspectiveCamera makeDefault position={[0, 1, 2]} />
			<Environment files='hdr/cloudy.hdr' background />
			{props.mode === 'fps'? <PointerLockControls onLock={() => props.updateIsLock(true)} onUnlock={() => props.updateIsLock(false)} selector='#startFps' />:<OrbitControls />}
			<Wrapper>
				<Room />
				<Adam />
			</Wrapper>
		</Views>
	)
}