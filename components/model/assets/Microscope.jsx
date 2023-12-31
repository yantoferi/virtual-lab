/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Laboratory/assets/Microscope.glb --transform --shadows 
Files: /home/TA/resource/Laboratory/assets/Microscope.glb [30.59MB] > Microscope-transformed.glb [1.04MB] (97%)
Author: Ricardo Dias Teixeira (https://sketchfab.com/RicardoDiasTeixeira)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/microscope-swift-sw380b-f81d863bec684b00a9b1ba4c2d844001
Title: Microscope SWIFT SW380B
*/

import { useGLTF } from '@react-three/drei'

export function Microscope(props) {
  const { nodes, materials } = useGLTF('models/Microscope-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.MicroscopeBase_LowPoly__0.geometry} material={materials['Scene_-_Root']} position={[0, -25.475, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('models/Microscope-transformed.glb')
