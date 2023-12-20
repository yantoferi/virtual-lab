"use client"

import Link from "next/link"
import { IoChevronDownOutline } from "react-icons/io5"
import { HiCursorArrowRays } from "react-icons/hi2"
import { PiVirtualRealityFill } from "react-icons/pi"
import { Popover, Transition } from "@headlessui/react"

export default function Popup(props) {
  return (
    <Popover className='relative'>
      <Popover.Button className='outline-none bg-[#3686ff] w-32 py-2.5 rounded color-white flex items-center justify-center gap-x-2'>
        <span>{props.title}</span>
        <IoChevronDownOutline />
      </Popover.Button>
      <Popover.Panel className='absolute left-0 -bottom-24'>
        <div className="text-start w-40 p-2 rounded bg-white text-[#020315]">
          {props.items.map((item, id) => (
            <div key={id} className="flex items-center gap-x-3">
              {id ===0? <HiCursorArrowRays className="w-8 h-8" />:<PiVirtualRealityFill className="w-8 h-8" />}
              <Link href={item.destination}>{item.item}</Link>
            </div>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  )
}