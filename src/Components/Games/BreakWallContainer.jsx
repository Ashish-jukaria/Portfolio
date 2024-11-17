import React from 'react'
import BreakWall from './BreakWall'

export default function BreakWallContainer() {
  return (
    <>
    
      <BreakWall position={[-20,0,25]} color={'white'}/>
      <BreakWall position={[-30,0,25]} color={'pink'}/>
      <BreakWall position={[-40,0,25]} color={'cyan'}/>

    </>
  )
}
