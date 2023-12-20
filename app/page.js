import Link from "next/link"
import Image from "next/image"
import Menus from "@/components/base/menu"
import { FaReact, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { SiBlender, SiVercel } from "react-icons/si"
import Popup from "@/components/base/popup"

export default function Home() {
  return (
    <main className="sm:container mx-auto">
      <section className="w-full h-screen grid grid-cols-12 auto-rows-min gap-y-5 content-between">
        <Menus />
        <div className="col-span-12 flex flex-col md:flex-row p-3">
          <div className="col-span-12 md:col-span-6 text-center md:text-start md:basis-7/12">
            <p className="text-[#ac1ed0] lg:text-lg">VIRTUAL REALITY</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">Simulasi Virtual</h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-8">Lab ITK</h1>
            <p className="text-[#5b5f73] lg:text-lg">Ayo mulai rasakan pengalaman immersive pada Lab Terpadu ITK secara virtual.</p>
            <div className="flex items-center justify-center md:justify-start gap-5 mt-5">
              <Popup title='Tutorial' items={[
                {item: 'Mode FPS', destination: '/modfpstutorial'},
                {item: 'Mode VR', destination: '/modvrtutorial'},
              ]} />
              <Popup title='Simulasi' items={[
                {item: 'Mode FPS', destination: '/modfpssimulasi'},
                {item: 'Mode VR', destination: '/modvrsimulasi'},
              ]} />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-2 md:order-3 md:basis-5/12">
            <Image src="/images/artist_male.png" alt="Hero-image" width={300} height={300} className="mx-auto" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-10 lg:col-span-8 md:col-start-2 lg:col-start-3 px-3 py-5">
          <ul className="flex items-center justify-around text-[#5b5f73] divide-x">
            <li className="grow">
              <div className="flex place-content-center"><FaReact className="w-8 h-8" /></div>
            </li>
            <li className="grow">
              <div className="flex place-content-center"><IoLogoJavascript className="w-8 h-8" /></div>
            </li>
            <li className="grow">
              <div className="flex place-content-center"><SiBlender className="w-8 h-8" /></div>
            </li>
            <li className="grow">
              <div className="flex place-content-center"><SiVercel className="w-8 h-8" /></div>
            </li>
            <li className="grow">
              <div className="flex place-content-center"><FaGithub className="w-8 h-8" /></div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
