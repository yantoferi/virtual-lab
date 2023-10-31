function SimulationLight() {
  return (
    <>
      <directionalLight color='white' intensity={2} position={[-2, 7, 3]} />
      <ambientLight color='white' intensity={1.5} />
    </>
  )
}

export {
  SimulationLight,
}