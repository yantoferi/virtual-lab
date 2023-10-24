/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Stair.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Stair.glb [4.28MB] > Stair-transformed.glb [327.18KB] (92%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Stair(props) {
  const { nodes, materials } = useGLTF('models/Stair-transformed.glb')
  useFrame(() => {
    // 
  }, 6)
  return (
    <group {...props} dispose={null}>
      <group position={[-2.932, 2.717, -3.017]} rotation={[Math.PI, 0, Math.PI]} scale={0.3}>
        <RigidBody colliders='trimesh' type='fixed'>
          <mesh castShadow receiveShadow geometry={nodes.Cube011.geometry} material={materials['White Tiles Marble PBR Texture Seamless.001']} />
          <mesh castShadow receiveShadow geometry={nodes.Cube011_1.geometry} material={materials.Plastic} />
        </RigidBody>
      </group>
    </group>
  )
}

useGLTF.preload('models/Stair-transformed.glb')
