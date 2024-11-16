import React from 'react'
import BreakWall from './BreakWall'

export default function BreakWallContainer() {
  return (
    <>
    
      <BreakWall position={[10,0,25]} color={'white'}/>
      <BreakWall position={[0,0,25]} color={'pink'}/>
      <BreakWall position={[-10,0,25]} color={'cyan'}/>

    </>
  )
}
