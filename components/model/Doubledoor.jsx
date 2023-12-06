/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 /home/TA/resource/Door.glb --shadows 
*/

import { useRouter } from 'next/navigation'
import { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, useRapier, vec3, quat } from '@react-three/rapier'
import { Interactive, useXR } from '@react-three/xr'
import { ContextData } from '../utils/context'

export function Door(props) {
  // Refs
  const doorLeft = useRef(null)
  const doorRight = useRef(null)
  const route = useRouter()
  const myContext = useContext(ContextData)

  const { nodes, materials } = useGLTF('models/Door-transformed.glb')

  const [isOpen, setIsOpen] = useState(false)

  const { session } = useXR()

  useEffect(() => {
    if (isOpen) {
      doorLeft.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), Math.PI / 2 - props.rotation[1]))
      doorRight.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), Math.PI / 2 - props.rotation[1]))
    } else {
      doorLeft.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), props.rotation[1]))
      doorRight.current.setRotation(quat().setFromAxisAngle(vec3({ x: 0, y: 1, z: 0 }), props.rotation[1] !== 0 ? -props.rotation[1] : -Math.PI))
    }
  }, [isOpen])

  const openDoor = (mode) => {
    myContext.updated(mode)
    myContext.changedest(props.destination)
    if (session) {
      session.end().then(() => {
        route.push('/laboratory')
        setIsOpen(!isOpen)
        return;
      })
    }
    route.replace('/laboratory')
    setIsOpen(!isOpen)
  }

  useFrame(() => {
    // 
  }, 3)
  return (
    <Interactive onSelect={() => openDoor('vr')}>
      <group {...props} dispose={null} onClick={() => openDoor('fps')}>
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
