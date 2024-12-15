import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const ParticleSphere = () => {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
  })

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <pointsMaterial color="#FF5722" size={0.015} sizeAttenuation />
    </Sphere>
  )
}

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <ParticleSphere />
      </Canvas>
    </div>
  )
}

export default Background3D

