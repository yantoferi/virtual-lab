/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/SmartTv.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/SmartTv.glb [1.99MB] > SmartTv-transformed.glb [204.9KB] (90%)
*/

import { useState } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import { toast } from 'react-toastify'

export function SmartTv(props) {
  const { nodes, materials } = useGLTF('models/SmartTv-transformed.glb')
  const [idVideo, setIdVideo] = useState(1)

  const texture = useVideoTexture(`/videos/video_${idVideo}.mp4`)

  const changeVideo = (event) => {
    if (idVideo === 4) {
      setIdVideo(1)
      return;
    }
    setIdVideo(idVideo + 1)
  }
  return (
    <group {...props} dispose={null}>
      <group scale={[-1.641, 1.641, 1.641]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube027.geometry} material={materials.tv_wood} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_1.geometry} material={materials['tv_table glass']} />
        <group>
          <Interactive
            onSelect={xrEvent => {
              if (xrEvent.intersection?.distance >= 0.5) {
                return;
              }
              changeVideo()
            }}
            onHover={(xrEvent) => {
              if ((xrEvent.intersection?.distance <= 0.5) && props.objectId === '') {
                toast.info('Klik trigger untuk ubah video', { autoClose: 1000 })
              }
            }}
          >
            <mesh castShadow receiveShadow geometry={nodes.Cube027_2.geometry}
              onPointerEnter={event => {
                if (event.distance <= 1.5) toast.info('Klik untuk mengubah video', { autoClose: 1000 })
              }}
              onClick={changeVideo}
            >
              <meshStandardMaterial map={texture} />
            </mesh>
          </Interactive>
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Cube027_3.geometry} material={materials.tv_casing} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_4.geometry} material={materials['tv_metal silver']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_5.geometry} material={materials['tv_black material']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube027_6.geometry} material={materials.tv_switch} />
      </group>
    </group>
  )
}

useGLTF.preload('models/SmartTv-transformed.glb')
