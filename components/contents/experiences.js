"use client"

import { useFrame, useThree } from "@react-three/fiber"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Vector3 } from "three"

const Ball = dynamic(() => import('../model/Ball').then(mod => mod.Ball))
const Book = dynamic(() => import('../model/Book').then(mod => mod.Book))

export default function Experiences() {
	const [target, setTarget] = useState({ obj: null })
	const [isDynamic, setIsDynamic] = useState(false)
	console.log(target)

	const { scene } = useThree()

	useEffect(() => {
		setIsDynamic(!isDynamic)
	}, [target])

	const getObject = model => {
		const uuid = model?.uuid
		if (!target.obj) {
			setTarget({ obj: model })
		} else if (target.obj && (target.obj.uuid === uuid)) {
			setTarget({ obj: null })
		}
	}

	useFrame((state, delta) => {
		const offsetObject = new Vector3(0, -0.05, -0.07)
		const adam = state.scene.getObjectByName('Adam')

		if (target.obj) {
			const parentUuid = target.obj.parent.uuid
			const parent = scene.getObjectByProperty('uuid', parentUuid)
			offsetObject.applyQuaternion(adam.quaternion)
			offsetObject.add(adam.position)
			parent.position.copy(offsetObject)
		}
	})
	return (
		<>
			<Ball getEvent={getObject} dynamic={isDynamic} />
			<Book getEvent={getObject} dynamic={isDynamic} />
		</>
	)
}