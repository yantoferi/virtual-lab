"use client"

import MyButton from "@/components/base/button"
import Modal from "@/components/base/modal"
import Tutorial from "@/components/contents/tutorial"
import { useState } from "react"
import { IoMdDisc } from "react-icons/io"
import { TfiTarget } from "react-icons/tfi"

export default function TutorialFps() {
  const [isLock, setIsLock] = useState(false)

  const changeLocked = status => {
    setIsLock(status)
  }

  return (
    <div className='w-full h-full relative'>
      {isLock? <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10'>
        <TfiTarget className='w-6 h-6 text-sky-600' />
      </div>:<MyButton />}
      <Tutorial mode='fps' updateIsLock={changeLocked} locked={isLock} />
      <Modal typeModal='fps' title='Perspektif orang pertama'>
        <ol>
          {content.map((item, id) => (
            <li key={id} className='flex mb-2'>
              <div className='p-1 mr-3'>
                <IoMdDisc className='w-4 h-4 text-sky-400' />
              </div>
              <div className='text-black'>
                <p className='font-medium'>{item.subtitle}</p>
                <p className='text-gray-400'>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Modal>
    </div>
  )
}

const content = [
  {
    subtitle: 'Memulai simulasi',
    description: `Tekan tombol Mulai pada layar anda untuk memulai simulasi, jika anda ingin jeda sejenak anda dapat menekan ESC pada keyboard`,
  },
  {
    subtitle: 'Kendali',
    description: 'Gunakan tombol W, A, S, D untuk bergerak ke arah depan, belakang, kiri dan kanan. Tekan SHIFT kiri untuk berlari dan SPACE untuk melompat',
  },
  {
    subtitle: 'Interaksi',
    description: 'Ada beberapa objek yang dapat menerima interaksi anda. Arahkan ikon corsair kepada objek, maka akan ada instruksi tertentu yang diberikan',
  },
  {
    subtitle: 'Akhiri tutorial',
    description: 'Anda dapat langsung menekan tombol Q untuk kembali ke halaman utama atau menekan ESC untuk menjeda dan kembali dengan menggunakan tombol back pada browser',
  }
]