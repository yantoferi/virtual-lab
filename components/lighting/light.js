import { useRef } from "react"
import { useHelper } from "@react-three/drei"
import { DirectionalLightHelper, PointLightHelper } from "three"

function SimulationLight(props) {
  const light = useRef(null)
  useHelper(light, DirectionalLightHelper, 2, 'blue')
  return (
    <>
      <directionalLight ref={light} color='yellow' intensity={3} position={props.position} castShadow shadow-mapSize={[4096, 4096]} shadow-bias={-0.0001}>
        <orthographicCamera args={[-50, 50, 50, -50]} attach='shadow-camera' />
        <object3D position={props.targetPos} attach='target' />
      </directionalLight>
      <ambientLight color='#ffffff' intensity={2} />
    </>
  )
}

function RoomLight(props) {
  const point = useRef(null)
  useHelper(point, PointLightHelper, 1, 'red')
  return (
    <pointLight ref={point} {...props} color='white' castShadow intensity={20} shadow-bias={-0.0001} />
  )
}

export {
  SimulationLight,
  RoomLight,
}