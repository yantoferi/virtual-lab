"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useState, Suspense, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useXR } from "@react-three/xr"
import { Box, useKeyboardControls } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Bottle = dynamic(() => import('../model/Bottle').then(mod => mod.Bottle))
const Book = dynamic(() => import('../model/Book').then(mod => mod.Book))

export default function Experiences(props) {
	const router = useRouter()

	const offset = useMemo(() => new Vector3(), [])
	const offsetVR = useMemo(() => new Vector3(), [])

	const [objectUuid, setObjectUuid] = useState('')
	const [isDynamic, setIsDynamic] = useState(true)
	const [idController, setIdController] = useState(0)

	const [subKey] = useKeyboardControls()

	const { session, controllers } = useXR()

	useEffect(() => {
		subKey(state => state.quit, pressed => {
			if (pressed) router.push('/')
		})
	}, [subKey])

	const getObject = (parent, idControl) => {
		if (parent.uuid === objectUuid) {
			setIsDynamic(true)
			setObjectUuid('')
		} else if (objectUuid === '') {
			setIsDynamic(false)
			setIdController(idControl)
			setObjectUuid(parent.uuid)
		}
	}

	useFrame((state) => {
		offset.set(0, 0.5, -0.55)
		offsetVR.set(0, -0.08, -0.13)
		if (objectUuid !== '') {
			const benda = state.scene.getObjectByProperty('uuid', objectUuid)
			const adam = state.scene.getObjectByName('Adam')

			offset.applyQuaternion(adam.quaternion)
			offset.add(adam.position)
			if (session && (controllers.length > 0)) {
				benda.position.copy(new Vector3().setFromMatrixPosition(controllers[idController].grip.matrixWorld))
				benda.position.add(offsetVR)
			} else {
				benda.position.copy(offset)
			}
		}
	}, 3)
	return (
		<Suspense fallback={null}>
			{props.simulasi ?
				<RigidBody colliders='cuboid' type='dynamic' mass={5}>
					<Box args={[0.3, 0.3, 0.3]} position={[21.7127, 10.5, -30.4185]}>
						<meshBasicMaterial color='orange' />
					</Box>
				</RigidBody>
				:
				<>
					<Bottle getObject={getObject} dynamic={isDynamic} objectId={objectUuid} position={[1, 1, -5]} />
					<Book getObject={getObject} dynamic={isDynamic} objectId={objectUuid} position={[4, 1, -0.7]} />
				</>
			}
		</Suspense>
	)
}