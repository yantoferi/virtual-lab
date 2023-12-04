/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/CncMachine.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/CncMachine.glb [81.52MB] > CncMachine-transformed.glb [4.86MB] (94%)
Author: lutz_westerfeld (https://sketchfab.com/lutzwesterfeld)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cnc-desktop-machine-e08b557b9f4543a3bba2faeb8572be72
Title: CNC Desktop Machine
*/

import { useGLTF } from '@react-three/drei'

export function CncMachine(props) {
  const { nodes, materials } = useGLTF('models/CncMachine-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Brep_Material_0.geometry} material={materials.PaletteMaterial001} position={[-0.112, -0.12, -0.511]} rotation={[-Math.PI / 2, 0, 0]} scale={0.009} />
    </group>
  )
}

useGLTF.preload('models/CncMachine-transformed.glb')