/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Labter.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Labter.glb [9.23MB] > Labter-transformed.glb [1.97MB] (79%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Labter(props) {
  const { nodes, materials } = useGLTF('models/Labter-transformed.glb')
  useFrame(() => {
    // 
  }, 1)
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders='trimesh' type='fixed' friction={1.2}>
        <mesh castShadow receiveShadow geometry={nodes.Cube006.geometry} material={materials['labter-floor']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_1.geometry} material={materials['White Wall 02-Freepoly.org']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube006_2.geometry} material={materials['Default white wall']} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('models/Labter-transformed.glb')
