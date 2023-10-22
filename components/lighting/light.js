function SimulationLight() {
  return (
    <>
      <directionalLight color='white' intensity={3} position={[2, 7, 8]} castShadow shadow-size={2048}>
        <orthographicCamera args={[-40, 40, 40, -40]} attach='shadow-camera' />
      </directionalLight>
      <ambientLight color='white' intensity={4} />
    </>
  )
}

export {
  SimulationLight,
}