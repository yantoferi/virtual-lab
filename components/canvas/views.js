"use client"

import { useRef } from "react"
import { gate } from "../utils/tunnel"
import { View } from "@react-three/drei"

export default function Views(props) {
	const placement = useRef(null)

	return (
		<>
			<div ref={placement} className={props.styling} />
			<gate.In>
				<View track={placement}>
					{props.children}
				</View>
			</gate.In>
		</>
	)
}