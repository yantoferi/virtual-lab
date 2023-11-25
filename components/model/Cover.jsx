/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Cover.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Cover.glb [14.01MB] > Cover-transformed.glb [1.78MB] (87%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Cover(props) {
  const { nodes, materials } = useGLTF('models/Cover-transformed.glb')
  useFrame(() => {
    // 
  }, 10)
  return (
    <group {...props} dispose={null}>
      <group position={[15.218, 0.25, -44.201]}>
        <RigidBody colliders='trimesh' type='fixed'>
          <mesh castShadow receiveShadow geometry={nodes.Plane010.geometry} material={materials['Black glass']} />
        </RigidBody>
          <mesh castShadow receiveShadow geometry={nodes.Plane010_1.geometry} material={materials['Plaster wall cover']} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Cover-transformed.glb')
