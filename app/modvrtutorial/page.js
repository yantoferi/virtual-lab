import Modal from "@/components/base/modal"
import { IoMdDisc } from "react-icons/io"

export default function TutorialVr() {
  return (
    <div className='w-full h-full bg-gray-100'>
      <h2 className='text-black'>This is VR</h2>
      <Modal typeModal='vr' title='Perspektif VR'>
        <ol>
          {content.map((item, id) => (
            <li key={id} className='flex mb-2'>
              <div className='p-1 mr-3'>
                <IoMdDisc className='w-4 h-4 text-sky-400' />
              </div>
              <div>
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
    description: 'Gunakan tombol thumbstick sebelah kanan untuk bergerak. Tekan tombol X pada controller kiri untuk berlari dan Y untuk melompat',
  },
  {
    subtitle: 'Interaksi',
    description: 'Ada beberapa objek yang dapat menerima interaksi anda. Arahkan controller kepada objek, jika objek berubah warna maka anda dapat berinteraksi dengan menahan trigger controller',
  },
  {
    subtitle: 'Akhiri tutorial',
    description: 'Anda dapat menekan tombol Exit VR untuk menjeda dan kembali dengan menggunakan tombol back pada browser VR',
  }
]