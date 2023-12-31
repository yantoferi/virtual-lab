/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Rooftop.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Rooftop.glb [24.73MB] > Rooftop-transformed.glb [3.35MB] (86%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Rooftop(props) {
  const { nodes, materials } = useGLTF('models/Rooftop-transformed.glb')
  useFrame(() => {
    // 
  }, 22)
  return (
    <group {...props} dispose={null}>
      <group position={[-4.275, 18.446, -16.574]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube019.geometry} material={materials['Metal Frame big']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube019_1.geometry} material={materials['Steel Satin metal big']} />
      </group>
      <group position={[23.258, 12.829, 17.753]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube021.geometry} material={materials['Metal Frame.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cube021_1.geometry} material={materials['Steel Satin metal']} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Rooftop.geometry} material={materials['Plastic Blue']} position={[11.006, 15.168, -15.027]} rotation={[0, Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Rails.geometry} material={materials['Metal Frame']} position={[11.006, 15.103, 1.696]} rotation={[0, Math.PI / 2, 0]} scale={1.555} />
      <mesh castShadow receiveShadow geometry={nodes.Cover_audit.geometry} material={materials['Yellow plastic']} position={[-4.357, 11.952, 28.342]} />
    </group>
  )
}

useGLTF.preload('models/Rooftop-transformed.glb')
