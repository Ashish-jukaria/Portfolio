import React from 'react'
import { Pins } from './Pins'
import { RigidBody } from '@react-three/rapier'
import { BowlingLane } from './BowlingLane'

export default function BowlingGame() {
  return (

    <group>
        <BowlingLane rotation={[0,-30,0]} position={[-180,0,0]} />


        <Pins position={[-240,0,-9]}/>
    </group>
      
  )
}
