import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export default function InitialPlane(props) {
  useFrame(() => {
    // 
  }, 1)
  return (
    <RigidBody colliders='hull' type='fixed'>
      <Plane args={[20, 20, 20]} rotation-x={-Math.PI / 2} position={props.position} receiveShadow>
        <meshStandardMaterial color='whitesmoke' />
      </Plane>
    </RigidBody>
  )
}