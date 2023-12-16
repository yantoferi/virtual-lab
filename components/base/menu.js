"use client"

import Image from "next/image"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

export default function Menus() {
  return (
    <div className="col-span-12 flex items-center justify-between px-3">
      <div id="logo">
        <Image src='/images/vr-glasses.png' alt="Logo" width={60} height={60} />
      </div>
      <div id="option-icon" className="md:hidden">
        <CiMenuFries className="w-6 h-6" />
      </div>
      <div className="menu-item hidden md:block">
        <ul className="flex items-center gap-5">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">GitHub</Link></li>
        </ul>
      </div>
    </div>
  )
}