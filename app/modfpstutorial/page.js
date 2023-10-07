import Modal from "@/components/base/modal"
import { IoMdDisc } from "react-icons/io"

export default function TutorialFps() {
  return (
    <div className='w-full h-full bg-gray-100'>
      <h2 className='text-black'>This is fps</h2>
      <Modal typeModal='fps' title='Perspektif orang pertama'>
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
    description: `Tekan tombol Mulai pada layar anda untuk memulai simulasi, jika anda ingin jeda sejenak anda dapat menekan ESC pada keyboard`,
  },
  {
    subtitle: 'Kendali',
    description: 'Gunakan tombol W, A, S, D untuk bergerak ke arah depan, belakang, kiri dan kanan. Tekan SHIFT kiri untuk berlari dan SPACE untuk melompat',
  },
  {
    subtitle: 'Interaksi',
    description: 'Ada beberapa objek yang dapat menerima interaksi anda. Arahkan ikon corsair kepada objek, jika objek berubah warna maka anda dapat berinteraksi dengan menekan klik kiri pada mouse.',
  },
  {
    subtitle: 'Akhiri tutorial',
    description: 'Anda dapat langsung menekan tombol Q untuk kembali ke halaman utama atau menekan ESC untuk menjeda dan kembali dengan menggunakan tombol back pada browser',
  }
]