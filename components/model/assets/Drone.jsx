/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/Drone.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/Drone.glb [16.84MB] > Drone-transformed.glb [2.89MB] (83%)
Author: SDC PERFORMANCE™️ (https://sketchfab.com/3Duae)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dji-fpv-by-sdc-high-performance-drone-d471ea8c6235457b8e131842e2cf3783
Title: Dji FPV by SDC -  High performance drone
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Drone(props) {
  const { nodes, materials } = useGLTF('models/Drone-transformed.glb')
  useFrame(() => {
    // 
  }, 20)
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial001} position={[0, 1.017, -0.135]} rotation={[-2.046, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.PaletteMaterial002} position={[0, 0.985, -0.126]} rotation={[-0.475, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.CARBONE} position={[0, 1.017, -0.135]} rotation={[-0.475, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_94.geometry} material={materials.M_Basic} position={[0, 1.017, -0.135]} rotation={[0.169, 0, 0]} />
    </group>
  )
}

useGLTF.preload('models/Drone-transformed.glb')
