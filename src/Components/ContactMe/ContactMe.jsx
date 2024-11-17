import React from 'react'
import { LinkedIn } from './LinkedIn'
import { GitHub } from './GitHub'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { useLoader } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'


export default function ContactMe() {
const font = useLoader(FontLoader,'/helvetiker_regular.typeface.json')

const LinkedInGameGeometry = new TextGeometry(" Click Me ", {
        font:font,
        size:2,
        depth:1
    })

function handleClick(id){
    if (id === 1) {
        window.open("https://www.linkedin.com/in/ashish-jukaria/")
    }
    else{
        window.open("https://github.com/Ashish-jukaria")
    }
}
  return (
    <>
    <group position={[-160,0,30]}>
    <LinkedIn position={[0,0,30]} scale={10} rotation={[0,-4.8,0]}/>

    <GitHub position={[0,0,0]} rotation={[0,1.3,0]}/>

    <mesh onClick={()=>{handleClick(1)}} rotation={[-Math.PI/2,0,1.5]} position={[10,0,30]}>
        <primitive object={LinkedInGameGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>

      <mesh onClick={()=>{
        handleClick(2)
      }} rotation={[-Math.PI/2,0,1.5]} position={[12,0,0]}>
        <primitive object={LinkedInGameGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
    </group>

    </>

  )
}
