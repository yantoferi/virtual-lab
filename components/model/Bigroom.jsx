/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Bigroom.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Bigroom.glb [14.07MB] > Bigroom-transformed.glb [1.8MB] (87%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Bigroom(props) {
  const { nodes, materials } = useGLTF('models/Bigroom-transformed.glb')
  useFrame(() => {
    // 
  }, 5)
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders='trimesh' type='fixed'>
        <group position={[-0.424, 7, 31.274]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials['Plaster lppm']} />
          <mesh castShadow receiveShadow geometry={nodes.Cube004_1.geometry} material={materials['Black glass']} />
        </group>
        <mesh castShadow receiveShadow geometry={nodes.Auditorium.geometry} material={materials['Plaster audit']} position={[-0.905, 9.5, 29.715]} />
        <mesh castShadow receiveShadow geometry={nodes.Kalterisasi.geometry} material={materials['Plaster labs']} position={[-0.399, 2.5, 34.133]} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('models/Bigroom-transformed.glb')