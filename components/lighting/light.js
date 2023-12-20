import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import { DirectionalLightHelper, PointLightHelper } from "three"

function RoomLight(props) {
  const point = useRef(null)
  useHelper(point, PointLightHelper, 1, 'red')
  return (
    <pointLight ref={point} {...props} color='white' />
  )
}

function SunLighting(props) {
  const light = useRef(null)
  useHelper(light, DirectionalLightHelper, 2, 'blue')
  return (
    <directionalLight ref={light} {...props} color='yellow' castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001}>
      <orthographicCamera args={[-50, 50, 50, -50]} attach='shadow-camera' />
      <object3D position={props.targetPos} attach='target' />
    </directionalLight>
  )
}

export {
  RoomLight,
  SunLighting,
}