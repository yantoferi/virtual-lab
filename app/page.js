import Image from "next/image"
import { HiMiniSquares2X2 } from "react-icons/hi2"
import Logo from "../public/images/pngwing.png"
import Menus from "@/components/base/menu"
import Popup from "@/components/base/popup"

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col'>
      <nav className='p-3'>
        <div className='sm:container mx-auto flex justify-between items-center relative'>
          <div className='logo w-10'>
            <Image src={Logo} alt='logo-image' />
          </div>
          <Menus />
          <div>
            <HiMiniSquares2X2 className='h-6 w-6 text-white' />
          </div>
        </div>
      </nav>
      <div className='grow p-3'>
        <div className='sm:container mx-auto h-full grid grid-cols-12 text-white'>
          <div className='greeting text-center md:text-start col-span-12 md:col-span-6 lg:col-span-5 md:row-start-2'>
            <span className='inline-block uppercase text-sm border border-gray-400 rounded p-1.5 mb-4'>technology</span>
            <h1 className='text-5xl xl:text-7xl font-bold capitalize mb-8'>Virtual Reality Lab terpadu</h1>
            <p className='text-gray-400 text-lg mb-8'>The Technology Behind Bitcoin Is Going to Change the World</p>
            <div className='flex items-center justify-center md:justify-start'>
              <div>
                <Popup title='Tutorial' route='tutorial' />
              </div>
              <div>
                <Popup title='Simulasi' outlined={true} route='simulasi' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
