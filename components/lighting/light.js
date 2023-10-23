function SimulationLight() {
  return (
    <>
      <directionalLight color='white' intensity={4} position={[2, 7, 8]} castShadow shadow-size={4096}>
        <orthographicCamera args={[-40, 40, 40, -40]} attach='shadow-camera' />
      </directionalLight>
      <ambientLight color='white' intensity={2} />
    </>
  )
}

export {
  SimulationLight,
}