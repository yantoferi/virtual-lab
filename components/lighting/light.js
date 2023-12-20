function RoomLight(props) {
  return (
    <pointLight {...props} color='white' />
  )
}

function SunLighting(props) {
  return (
    <directionalLight {...props} color='yellow' castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001}>
      <orthographicCamera args={[-50, 50, 50, -50]} attach='shadow-camera' />
      <object3D position={props.targetPos} attach='target' />
    </directionalLight>
  )
}

export {
  RoomLight,
  SunLighting,
}