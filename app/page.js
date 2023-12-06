"use client"

import Link from "next/link"
import Image from "next/image"
import Menus from "@/components/base/menu"
import { Menu } from "@headlessui/react"
import { HiMiniChevronDown } from "react-icons/hi2"
import { DiJavascript1, DiReact } from "react-icons/di"
import { BiLogoBlender } from "react-icons/bi"
import { SiNetlify } from "react-icons/si"
import { FaGithubSquare } from "react-icons/fa"

export default function Home() {
  return (
    <main id="home" className="md:container mx-auto h-screen flex flex-col justify-between p-4">
      <Menus />
      <div className="content flex flex-wrap-reverse items-center">
        <div className="basis-full md:basis-1/2">
          <p className="text-[#ac1ed0] mb-2">SIMULASI VIRTUAL LAB</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Virtual Reality Lab Terpadu ITK</h1>
          <p className="text-[#5b5f73] mb-5">Sebuah simulasi virtual untuk berkenalan dengan lingkungan lab terpadu itk melalui pengalaman yang baru.</p>
          <div className="flex items-center justify-center md:justify-start">
            <Menu as="div" className="relative mx-3">
              <Menu.Button className="bg-[#3686ff] w-28 py-2 rounded-md">
                <div className="flex items-center text-white justify-center gap-x-2">
                  <span>Tutorial</span>
                  <HiMiniChevronDown />
                </div>
              </Menu.Button>
              <Menu.Items className="absolute top-full left-0 text-white">
                <Menu.Item>
                  <Link href='/modfpstutorial' className="block">Mode fps</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href='/modvrtutorial' className="block">Mode VR</Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Menu as="div" className="relative mx-3">
              <Menu.Button className="bg-[#3686ff] w-28 py-2 rounded-md">
                <div className="flex items-center text-white justify-center gap-x-2">
                  <span>Simulasi</span>
                  <HiMiniChevronDown />
                </div>
              </Menu.Button>
              <Menu.Items className="absolute top-full left-0 text-white">
                <Menu.Item>
                  <Link href='/modfpssimulasi' className="block">Mode fps</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href='/modvrsimulasi' className="block">Mode VR</Link>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 text-center">
          <Image src='/images/artist_male.png' alt="hero-image" width={400} height={200} />
        </div>
      </div>
      <div className="flex items-center justify-center divide-x divide-slate-700 text-[#5b5f73]">
        <div>
          <DiJavascript1 className="w-8 h-8 mx-4 sm:mx-8 md:mx-12" />
        </div>
        <div>
          <DiReact className="w-8 h-8 mx-4 sm:mx-8 md:mx-12" />
        </div>
        <div>
          <BiLogoBlender className="w-8 h-8 mx-4 sm:mx-8 md:mx-12" />
        </div>
        <div>
          <SiNetlify className="w-8 h-8 mx-4 sm:mx-8 md:mx-12" />
        </div>
        <div>
          <FaGithubSquare className="w-8 h-8 mx-4 sm:mx-8 md:mx-12" />
        </div>
      </div>
    </main>
  )
}
