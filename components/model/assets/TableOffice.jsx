/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/TableOffice.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/TableOffice.glb [4.93MB] > TableOffice-transformed.glb [1.46MB] (70%)
*/

import { useGLTF } from '@react-three/drei'

export function TableOffice(props) {
  const { nodes, materials } = useGLTF('models/TableOffice-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.connect.geometry} material={materials.Black_Paint} />
      <group position={[0.605, 0.777, 0.177]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh012.geometry} material={materials.Handle_mat} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh012_1.geometry} material={materials.Paint_edge_mat} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh012_2.geometry} material={materials.Paint_mat} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh012_3.geometry} material={materials.Key_metal} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.table.geometry} material={materials.Main_table} />
    </group>
  )
}

useGLTF.preload('models/TableOffice-transformed.glb')
