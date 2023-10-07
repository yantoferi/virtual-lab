"use client"

import Link from "next/link"
import { IoChevronDownOutline } from "react-icons/io5"
import { HiCursorArrowRays } from "react-icons/hi2"
import { PiVirtualRealityFill } from "react-icons/pi"
import { Popover, Transition } from "@headlessui/react"

export default function Popup(props) {
  return (
    <Popover className='relative'>
      <Popover.Button className={`${props.outlined ? 'bg-transparent text-white border border-sky-400' : 'bg-sky-400 text-black'} py-2.5 px-4 mr-3 rounded font-medium flex items-center cursor-default outline-transparent outline-0`}>
        <span className='capitalize'>{props.title}</span>
        <div className='ml-2'>
          <IoChevronDownOutline />
        </div>
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className='absolute z-10 -bottom-28 w-44 bg-white text-black text-start p-2 rounded'>
          <Link href={`/modfps${props.route}`} className='flex items-center md:hover:bg-sky-100 p-1 rounded'>
            <div className='bg-sky-200 p-1.5 rounded-md mr-4'>
              <HiCursorArrowRays className='w-5 h-5 text-sky-600' />
            </div>
            <div>
              <h2 className="font-medium">Mode FPS</h2>
            </div>
          </Link>
          <Link href={`/modvr${props.route}`} className='flex items-center md:hover:bg-sky-100 p-1 rounded'>
            <div className='bg-sky-200 p-1.5 rounded-md mr-4'>
              <PiVirtualRealityFill className='w-5 h-5 text-sky-600' />
            </div>
            <div>
              <h2 className="font-medium">Mode VR</h2>
            </div>
          </Link>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}