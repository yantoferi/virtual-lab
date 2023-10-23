/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/RoomTV.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/RoomTV.glb [2.28MB] > RoomTV-transformed.glb [378.62KB] (83%)
*/

import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Interactive } from '@react-three/xr'
import { useState } from 'react'
import { toast } from 'react-toastify'

export function RoomTV(props) {
  const { nodes, materials } = useGLTF('models/RoomTV-transformed.glb')

  const [idVideo, setIdVideo] = useState(1)

  const texture = useVideoTexture(`/videos/video_${idVideo}.mp4`, { loop: true })

  const changeVideo = event => {
    if ((event.distance <= 0.7) || (event.intersection?.distance <= 0.7)) {
      if (idVideo === 4) {
        return setIdVideo(1)
      }
      setIdVideo(idVideo + 1)
    }
  }
  useFrame(() => {
    // 
  }, 4)
  return (
    <group {...props} dispose={null}>
      <group position={[0.207, 0.142, 2.153]} rotation={[-Math.PI / 2, 0, -1.325]} scale={0.6}>
        <mesh castShadow receiveShadow geometry={nodes.book_cover005_1.geometry} material={materials['book_cover.005']} />
        <mesh castShadow receiveShadow geometry={nodes.book_cover005_2.geometry} material={materials.book_paper} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.book_cover006.geometry} material={materials['book_cover.006']} position={[0.207, 0.157, 2.153]} rotation={[-Math.PI / 2, 0, -1.458]} scale={0.6} />
      <mesh castShadow receiveShadow geometry={nodes.book_cover007.geometry} material={materials['book_cover.007']} position={[-0.614, 0.225, 2.164]} rotation={[-Math.PI / 2, 0, -0.615]} scale={0.6} />
      <mesh castShadow receiveShadow geometry={nodes.Cabinet_cover.geometry} material={materials['wood (Oak Matt Antracite Gray)']} position={[-0.214, 0.052, 2.173]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.6} />
      <mesh castShadow receiveShadow geometry={nodes.Cabinet1.geometry} material={materials.ceramic} position={[0.326, 0.058, 2.284]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.6} />
      <group position={[-0.214, 0.465, 2.185]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.6}>
        <Interactive onSelect={changeVideo}>
          <mesh castShadow receiveShadow geometry={nodes.TV_1.geometry} onClick={changeVideo} rotation-z={-Math.PI}
            onPointerEnter={event => { if (event.distance <= 0.7) toast.info('Klik untuk mengubah video!', { autoClose: 1000 }) }}>
            <meshStandardMaterial map={texture} attach='material' />
          </mesh>
        </Interactive>
        <mesh castShadow receiveShadow geometry={nodes.TV_2.geometry} material={materials.frame} />
      </group>
    </group>
  )
}

useGLTF.preload('models/RoomTV-transformed.glb')
