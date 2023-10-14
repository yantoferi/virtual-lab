"use client"

import dynamic from "next/dynamic"

// const Ball = dynamic(() => import('../model/Ball').then(mod => mod.Ball))
const Book = dynamic(() => import('../model/Book').then(mod => mod.Book))

export default function Experiences() {
	return (
		<>
			<Book />
		</>
	)
}