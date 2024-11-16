import React from 'react'
import { RigidBody } from '@react-three/rapier'
import { Bowling_Ball } from './Bowling_Ball'

export function BowlingLane(props) {
  return (
    <group rotation={props.rotation} position={props.position}>
      {/* Bowling Lane */}
      <RigidBody type="fixed" friction={0.05} restitution={0.2}>
        <mesh position={[0, 0, -25]} scale={[40, 0.1, 100]}>
          <boxGeometry />
          <meshStandardMaterial color="#8B4513" /> {/* Wooden color for the lane */}
        </mesh>
      </RigidBody>

      {/* Left Wall */}
      <RigidBody type="fixed" friction={0.1} restitution={0.1}>
        <mesh position={[-10.5, 0.5, -25]} scale={[0.5, 1, 50]}>
          <boxGeometry />
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>

      {/* Right Wall */}
      <RigidBody type="fixed" friction={0.1} restitution={0.1}>
        <mesh position={[10.5, 0.5, -25]} scale={[0.5, 1, 50]}>
          <boxGeometry />
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>

      {/* Bowling Ball */}
      <Bowling_Ball position={[0, 1, 0]} />
    </group>
  )
}
