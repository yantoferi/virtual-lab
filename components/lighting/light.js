export default function Lighting() {
  return (
    <>
      {/* <directionalLight color='white' intensity={3} position={[1.5, 9, 8]} castShadow>
        <vector2 args={[2048, 2048]} attach='shadow-mapSize' />
        <orthographicCamera args={[-60, 60, 60, -60]} attach='shadow-camera' />
      </directionalLight> */}
      <ambientLight color='white' intensity={2} />
    </>
  )
}