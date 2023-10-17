"use client"

import Modal from "@/components/base/modal"
import Tutorial from "@/components/contents/tutorial"
import { VRButton } from "@react-three/xr"
import { IoMdDisc } from "react-icons/io"

export default function TutorialVr() {
  return (
    <div className='w-full h-full bg-gray-100'>
      <VRButton />
      <Tutorial mode='vr' />
      <Modal typeModal='vr' title='Perspektif VR'>
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
    description: 'Tekan tombol Enter VR pada layar anda untuk memulai simulasi, jika anda ingin jeda sejenak anda dapat menekan tombol Exit VR',
  },
  {
    subtitle: 'Kendali',
    description: 'Gunakan tombol thumbstick sebelah kiri untuk bergerak. Tekan tombol grip pada controller kiri untuk berlari dan grip controller kanan untuk melompat',
  },
  {
    subtitle: 'Interaksi',
    description: 'Ada beberapa objek yang dapat menerima interaksi anda. Arahkan controller kepada objek, maka akan ada instruksi untuk menekan trigger controller',
  },
  {
    subtitle: 'Akhiri tutorial',
    description: 'Anda dapat menekan tombol Exit VR untuk menjeda dan kembali dengan menggunakan tombol back pada browser VR',
  }
]