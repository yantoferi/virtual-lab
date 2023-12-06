/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/Computer.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/Computer.glb [11.35MB] > Computer-transformed.glb [1.68MB] (85%)
*/

import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Computer(props) {
  const { nodes, materials } = useGLTF('models/Computer-transformed.glb')
  const videoTexture = useVideoTexture('/videos/video_1.mp4', {loop: true})
  useFrame({
    // 
  }, 6)
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Untitled075.geometry} material={materials.PaletteMaterial002} />
      <mesh castShadow receiveShadow geometry={nodes.Untitled075_1.geometry} material={materials.display} />
      <mesh castShadow receiveShadow geometry={nodes.Untitled075_2.geometry}>
        <meshStandardMaterial map={videoTexture} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.Untitled075_3.geometry} material={materials.PaletteMaterial001} />
    </group>
  )
}

useGLTF.preload('models/Computer-transformed.glb')
