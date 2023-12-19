/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Lab.glb --shadows --keepgroups 
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function Labs(props) {
  const { nodes, materials } = useGLTF('models/Lab-transformed.glb')
  useFrame(() => {
    // 
  }, 4)
  return (
    <group {...props} dispose={null}>
      {bigLabPos.map((bigLab, id) => (
        <group key={id} position={[...bigLab.position]} rotation={[...bigLab.rotation]}>
          <RigidBody colliders={false} type='fixed'>
            <mesh castShadow receiveShadow geometry={nodes.Lab.geometry} material={materials['Plaster labs']} />
            <CuboidCollider args={[0.6, 2, 5.8]} position={[4.2, 2, 0]} />
            <CuboidCollider args={[0.2, 2, 8]} position={[-4.6, 2, 0]} />
            <CuboidCollider args={[5, 2, 0.2]} position={[0, 2, 8]} />
            <CuboidCollider args={[5, 2, 0.2]} position={[0, 2, -8]} />
          </RigidBody>
          <mesh castShadow receiveShadow geometry={nodes['Lab-top'].geometry} material={materials['Plaster labs top']} position={[-0.092, 4.15, 0]} />
          <pointLight color='white' intensity={3} position-y={3.5} />
        </group>
      ))}
      {smallLabPos.map((smallLab, id) => (
        <group key={id} position={[...smallLab.position]} rotation={[...smallLab.rotation]}>
          <RigidBody colliders={false} type='fixed'>
            <mesh castShadow receiveShadow geometry={nodes.Lab_small.geometry} material={materials['Plaster lab small']} />
            <CuboidCollider args={[0.6, 2, 5.8]} position={[4.2, 2, 0]} />
            <CuboidCollider args={[0.2, 2, 8]} position={[-4.6, 2, 0]} />
            <CuboidCollider args={[5, 2, 0.2]} position={[0, 2, 8]} />
            <CuboidCollider args={[5, 2, 0.2]} position={[0, 2, -8]} />
            <CuboidCollider args={[5, 2, 0.2]} position={[0, 2, 0]} />
          </RigidBody>
          <mesh castShadow receiveShadow geometry={nodes['Lab-top_small'].geometry} material={materials['Plaster lab small top']} position={[-0.092, 4.15, 0]} />
        </group>
      ))}
    </group>
  )
}

useGLTF.preload('models/Lab-transformed.glb')

const bigLabPos = [
  {
    position: [0, 0.5, 0],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 0.5, -16.2002],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 0.5, -32.397],
    rotation: [0, 0, 0],
  },
  //
  {
    position: [0, 5, 0],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 5, -16.2002],
    rotation: [0, 0, 0],
  },
  //
  {
    position: [0, 9.5, 0],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 9.5, -16.2002],
    rotation: [0, 0, 0],
  },
  //
  {
    position: [21.7127, 0.5, 1.98262],
    rotation: [0, -Math.PI, 0],
  },
  {
    position: [21.7127, 0.5, -14.2114],
    rotation: [0, -Math.PI, 0],
  },
  {
    position: [21.7127, 0.5, -30.4116],
    rotation: [0, -Math.PI, 0],
  },
  //
  {
    position: [21.7127, 5, 1.98262],
    rotation: [0, -Math.PI, 0],
  },
  {
    position: [21.7127, 5, -14.2114],
    rotation: [0, -Math.PI, 0],
  },
  //
  {
    position: [21.7127, 9.5, 1.98262],
    rotation: [0, -Math.PI, 0],
  },
  {
    position: [21.7127, 9.5, -14.2114],
    rotation: [0, -Math.PI, 0],
  },
]

const smallLabPos = [
  {
    position: [0, 5, -32.4005],
    rotation: [0, 0, 0],
  },
  {
    position: [0, 9.5, -32.4005],
    rotation: [0, 0, 0],
  },

  {
    position: [21.7127, 5, -30.4185],
    rotation: [0, -Math.PI, 0],
  },
  {
    position: [21.7127, 9.5, -30.4185],
    rotation: [0, -Math.PI, 0],
  },
]