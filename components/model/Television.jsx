/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/TV.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/TV.glb [4.28MB] > TV-transformed.glb [653.28KB] (85%)
*/

import { useGLTF } from '@react-three/drei'

export function Television(props) {
  const { nodes, materials } = useGLTF('models/TV-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.81, 3.84, -3.617]} rotation={[0, Math.PI / 2, 0]} scale={0.445}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={materials['TV - Plastic Rough']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_1.geometry} material={materials['TV - Screen']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_2.geometry} material={materials['TV - Metal Brushed']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder006_3.geometry} material={materials['TV - Goldy']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.drawer006.geometry} material={materials['CC0Textures/Wood029/2K-JPG']} position={[-0.808, 3.807, -3.605]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.391, 0.396, 0.396]} />
      <mesh castShadow receiveShadow geometry={nodes.frame001.geometry} material={materials.gloss} position={[-0.808, 3.807, -3.605]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.396} />
    </group>
  )
}

useGLTF.preload('models/TV-transformed.glb')
