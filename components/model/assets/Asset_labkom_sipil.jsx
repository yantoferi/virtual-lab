/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/Asset_labkom_sipil.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/Asset_labkom_sipil.glb [23.8MB] > Asset_labkom_sipil-transformed.glb [2.28MB] (90%)
*/

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CylinderCollider } from '@react-three/rapier'

export function LabSipil(props) {
  const { nodes, materials } = useGLTF('models/Asset_labkom_sipil-transformed.glb')
  useFrame(() => {
    // 
  }, 25)
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders={false} type='fixed'>
        <mesh castShadow receiveShadow geometry={nodes.Cube044.geometry} material={materials.PaletteMaterial001} position={[26.102, 5.78, -34.329]} rotation={[0, Math.PI / 2, 0]} scale={1.203} />
        <CylinderCollider args={[1, 1.5]} />
      </RigidBody>
      <mesh castShadow receiveShadow geometry={nodes.Cube045.geometry} material={materials.PaletteMaterial002} position={[26.189, 5.974, -34.438]} rotation={[0, Math.PI / 2, 0]} scale={1.203} />
      <mesh castShadow receiveShadow geometry={nodes.Plane053.geometry} material={materials.PaletteMaterial003} position={[26.068, 5.82, -34.335]} rotation={[0, Math.PI / 2, 0]} scale={1.203} />
      <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials['Cabinet_Old White Metal']} position={[25.613, 5.358, -38.106]} scale={0.294} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder003.geometry} material={materials['Cabinet_Die-cast aluminum 2']} position={[25.613, 5.279, -37.812]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.908} />
      <mesh castShadow receiveShadow geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} position={[25.613, 5.063, -38.108]} scale={0.908} />
      <group position={[25.613, 5.064, -38.086]} scale={0.908}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={materials.PaletteMaterial005} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder002_1.geometry} material={materials.PaletteMaterial004} />
      </group>
      <group position={[22.086, 7.002, -38.368]} scale={1.684}>
        <mesh castShadow receiveShadow geometry={nodes.Cube028.geometry} material={materials.PaletteMaterial006} />
        <mesh castShadow receiveShadow geometry={nodes.Cube028_1.geometry} material={materials.FirstAidSticker} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.FirstAidSupply.geometry} material={materials.FirstAidSupply2} position={[22.134, 6.985, -38.31]} rotation={[Math.PI / 2, 0, 0]} scale={1.684} />
      <mesh castShadow receiveShadow geometry={nodes.FirstAidSupply016.geometry} material={materials.FirstAidSupply1} position={[22.076, 7.144, -38.309]} rotation={[Math.PI / 2, 0, 0]} scale={1.684} />
      <mesh castShadow receiveShadow geometry={nodes.FirstAidSupply026.geometry} material={materials.FirstAidSupply3} position={[21.971, 6.758, -38.298]} rotation={[0, -0.05, 0]} scale={1.684} />
      <group position={[20.429, 5.049, -34.352]} rotation={[Math.PI / 2, 0, 0]} scale={[1.171, 1.336, 1.336]}>
        <mesh castShadow receiveShadow geometry={nodes.Plane007.geometry} material={materials['4G Glass']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_1.geometry} material={materials.PaletteMaterial008} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_2.geometry} material={materials['Marble Finish']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_3.geometry} material={materials['Melamine Black']} />
        <mesh castShadow receiveShadow geometry={nodes.Plane007_4.geometry} material={materials.PaletteMaterial007} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes['File_Cabinets-Freepolyorg'].geometry} material={materials['01 - Default']} position={[25.073, 5, -38.043]} />
      <instancedMesh args={[nodes['706336_w'].geometry, materials.FirstAidSupply3, 5]} castShadow receiveShadow instanceMatrix={nodes['706336_w'].instanceMatrix} />
      <instancedMesh args={[nodes['z0073-24-Unit-First-Aid-Kit-OSHA-Metal-Box014'].geometry, materials.FirstAidSupply2, 5]} castShadow receiveShadow instanceMatrix={nodes['z0073-24-Unit-First-Aid-Kit-OSHA-Metal-Box014'].instanceMatrix} />
    </group>
  )
}

useGLTF.preload('models/Asset_labkom_sipil-transformed.glb')
