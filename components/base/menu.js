"use client"

import { useState } from "react"

export default function Menus() {
  const [idActive, setIdActive] = useState(0)
  return (
    <ul className='text-gray-400'>
      {['Home', 'About', 'GitHub'].map((item, index) => (
        <li key={index} className={`inline-block mx-3 text-sm ${idActive === index && 'text-white'}`}
          onClick={() => setIdActive(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}