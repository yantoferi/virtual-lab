/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Lands.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Lands.glb [3.66MB] > Lands-transformed.glb [153.15KB] (96%)
*/

import { useGLTF } from '@react-three/drei'

export function Lands(props) {
  const { nodes, materials } = useGLTF('models/Lands-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Landscape003.geometry} material={materials['Grass Clovers 2']} />
      <mesh castShadow receiveShadow geometry={nodes.Landscape_plane003.geometry} material={nodes.Landscape_plane003.material} />
    </group>
  )
}

useGLTF.preload('models/Lands-transformed.glb')
