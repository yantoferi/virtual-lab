"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

const Ball = dynamic(() => import('../model/Ball').then(mod => mod.Ball))

export default function Experiences() {
	const [target, setTarget] = useState({obj: null})
	console.log(target)

	const getObject = model => {
		setTarget({obj: model})
	}
	return (
		<>
			<Ball getEvent={getObject} />
		</>
	)
}