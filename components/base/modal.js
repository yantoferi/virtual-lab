"use client"

import { Dialog, Transition } from "@headlessui/react"
import { useState, Fragment } from "react"
import VRIcon from "../../public/images/vr-glasses.png"
import FpsIcon from "../../public/images/keyboard.png"
import XrModule from "../../public/images/controllers.jpg"
import Image from "next/image"

export default function Modal(props) {
  const [isOpen, setIsOpen] = useState(true)
  const [isDisable, setIsDisable] = useState(true)

  const userFinishRead = (eve) => {
    const target = eve.target
    const atBottom = (target.scrollHeight - target.scrollTop === target.clientHeight)
    if (atBottom) setIsDisable(false)
  }
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => {if (!isDisable) setIsOpen(false)}}>
        <div className='w-full h-full fixed inset-0 flex items-center justify-center p-3 z-20'>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className='w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 h-96 flex flex-col bg-white drop-shadow-xl rounded-lg py-4 px-8'>
              <div className='flex items-center'>
                <div className='w-12 mr-4'>
                  <Image src={props.typeModal === 'fps' ? FpsIcon : VRIcon} alt='icon-control' />
                </div>
                <div className='text-black'>
                  <span className='text-sm capitalize font-medium'>tutorial</span>
                  <h2 className='capitalize font-bold'>{props.title}</h2>
                </div>
              </div>
              <div className='grow overflow-y-auto my-4' onScroll={userFinishRead}>
                {props.typeModal === 'vr' && <Image src={XrModule} alt='image xr controller' />}
                {props.children}
              </div>
              <div className='text-end text-black'>
                <button type='button' onClick={() => setIsOpen(false)} disabled={isDisable}>Oke</button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}