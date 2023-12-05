/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Door.glb --shadows 
*/

import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, useRapier, vec3, quat } from '@react-three/rapier'
import { Interactive } from '@react-three/xr'
import { useRouter } from 'next/navigation'

export function Door(props) {
  // Refs
  const doorLeft = useRef(null)
  const doorRight = useRef(null)
  const router = useRouter()

  const { nodes, materials } = useGLTF('models/Door-transformed.glb')

  const [isOpen, setIsOpen] = useState(false)

  const { world } = useRapier()

  useEffect(() => {
    if (isOpen) {
      router.push('/labkom')
      doorLeft.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), Math.PI / 2 - props.rotation[1]))
      doorRight.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), Math.PI / 2 - props.rotation[1]))
    } else {
      doorLeft.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), props.rotation[1]))
      doorRight.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), props.rotation[1] !== 0 ? -props.rotation[1] : -Math.PI))
    }
  }, [isOpen])

  const openDoor = () => {
    setIsOpen(!isOpen)
  }

  useFrame(() => {
    // 
  }, 3)
  return (
    <Interactive onSelect={openDoor}>
      <group {...props} dispose={null} onClick={openDoor}>
        <RigidBody ref={doorLeft} colliders='cuboid' type='fixed' position-z={0.85}>
          <mesh castShadow receiveShadow geometry={nodes.Door_double.geometry} material={materials['Afromosia Fine Wood']} position-z={-0.85} />
        </RigidBody>
        <RigidBody ref={doorRight} colliders='cuboid' type='fixed' position-z={-0.85}>
          <mesh castShadow receiveShadow geometry={nodes.Door_double.geometry} material={materials['Afromosia Fine Wood']} position-z={-0.85} />
        </RigidBody>
      </group>
    </Interactive>
  )
}

useGLTF.preload('models/Door-transformed.glb')
