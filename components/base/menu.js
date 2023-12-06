"use client"

import Link from "next/link"
import { Popover } from "@headlessui/react"
import Image from "next/image"
import { CiMenuFries } from "react-icons/ci"

export default function Menus() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-14 h-14 relative">
        <Image src='/images/pngwing.png' alt="logo" fill />
      </div>
      <Popover className="relative md:hidden">
        <Popover.Button className="p-2 outline-none">
          <CiMenuFries className="w-6 h-6 text-white" />
        </Popover.Button>

        <Popover.Panel className="absolute right-0">
          <div className="w-28 bg-[#5b5f73] backdrop-opacity-50 backdrop-blur-xl rounded p-3">
            <ul className="text-sm">
              <Link href="https://github.com/yantoferi/virtual-lab">GitHub</Link>
            </ul>
          </div>
        </Popover.Panel>
      </Popover>
      <div className="hidden md:block basis-80">
        <ul className="flex justify-around text-sm text-[#5b5f73]">
          <Link href="https://github.com/yantoferi/virtual-lab">GitHub</Link>
        </ul>
      </div>
    </div>
  )
}