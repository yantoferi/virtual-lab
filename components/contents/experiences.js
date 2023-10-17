"use client"

import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { useXR } from "@react-three/xr"
import { useKeyboardControls } from "@react-three/drei"

const Bottle = dynamic(() => import('../model/Bottle').then(mod => mod.Bottle))
const Book = dynamic(() => import('../model/Book').then(mod => mod.Book))

export default function Experiences() {
	const router = useRouter()

	const [objectUuid, setObjectUuid] = useState('')
	const [isDynamic, setIsDynamic] = useState(true)
	const [idController, setIdController] = useState(0)

	const [subKey] = useKeyboardControls()

	const {session, controllers} = useXR()

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
		if (objectUuid !== '') {
			const offset = new Vector3(0, 0.1, -0.3)
			const benda = state.scene.getObjectByProperty('uuid', objectUuid)
			const adam = state.scene.getObjectByName('Adam')
			
			offset.applyQuaternion(adam.quaternion)
			offset.add(adam.position)
			if (session && (controllers.length > 0)) {
				benda.position.copy(new Vector3().setFromMatrixPosition(controllers[idController].grip.matrixWorld))
				benda.position.add(new Vector3(0, -0.05, -0.1))
			} else {
				benda.position.copy(offset)
			}
		}
	}, 3)
	return (
		<>
			<Bottle getObject={getObject} dynamic={isDynamic} objectId={objectUuid} />
			<Book getObject={getObject} dynamic={isDynamic} objectId={objectUuid} />
		</>
	)
}