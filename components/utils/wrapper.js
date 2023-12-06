"use client"

import { useMemo } from "react"
import { KeyboardControls } from "@react-three/drei"
import { XR } from "@react-three/xr"
import { Physics } from "@react-three/rapier"

export default function Wrapper({ children }) {
	const mapKeys = useMemo(() => [
		{ name: 'forward', keys: ['w'] },
		{ name: 'backward', keys: ['s'] },
		{ name: 'left', keys: ['a'] },
		{ name: 'right', keys: ['d'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['ShiftLeft'] },
		{ name: 'quit', keys: ['q'] },
	], [])

	return (
		<XR referenceSpace='local'>
			<KeyboardControls map={mapKeys}>
				<Physics debug>
					{children}
				</Physics>
			</KeyboardControls>
		</XR>
	)
}