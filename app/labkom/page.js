import LabkomE from '@/components/rooms/labkome'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

const Views = dynamic(() => import('@/components/canvas/views'), { ssr: false })

export default function LabkomPage() {
    return (
        <Views styling='w-full h-full'>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[0, 7, 8]} fov={55} far={25} />
                <OrbitControls />
                <LabkomE />
            </Suspense>
        </Views>
    )
}