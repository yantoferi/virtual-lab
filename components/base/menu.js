"use client"

import Link from "next/link"
import Image from "next/image"

export default function Menus() {
  return (
    <div className="col-span-12 flex items-center justify-between px-3">
      <div id="logo">
        <Image src='/images/vr-glasses.png' alt="Logo" width={60} height={60} />
      </div>
      <div className="menu-item">
        <ul className="flex items-center gap-5">
          <li><Link href="#">GitHub</Link></li>
        </ul>
      </div>
    </div>
  )
}