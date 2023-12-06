/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/Computer.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/Computer.glb [9.7MB] > Computer-transformed.glb [1.59MB] (84%)
*/

import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Computer(props) {
  const { nodes, materials } = useGLTF('models/Computer-transformed.glb')
  const texture = useVideoTexture('/videos/video_1.mp4')
  useFrame(() => {
    // 
  }, 8)
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Untitled075.geometry} material={materials.PaletteMaterial002} />
      <mesh castShadow receiveShadow geometry={nodes.Untitled075_1.geometry}>
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Untitled075_2.geometry} material={materials.PaletteMaterial001} />
    </group>
  )
}

useGLTF.preload('models/Computer-transformed.glb')
