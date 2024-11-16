import { useLoader } from '@react-three/fiber'
import React from 'react'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

export default function About() {
    const font = useLoader(FontLoader,'/helvetiker_regular.typeface.json')

    const textGeometry = new TextGeometry('Ashish Jukaria', {
        font:font,
        size:12,
        depth:1
    })
    const aboutdevGeometry = new TextGeometry('Full Stack Developer', {
        font:font,
        size:10,
        depth:1
    })

    const aboutskillsGeometry = new TextGeometry('Skills', {
        font:font,
        size:10,
        depth:1
    })
    const aboutDjangoskillsGeometry = new TextGeometry('Django', {
        font:font,
        size:2,
        depth:1
    })
    const aboutReactskillsGeometry = new TextGeometry('React', {
        font:font,
        size:2,
        depth:1
    }) 
    const aboutNodeskillsGeometry = new TextGeometry('Node', {
        font:font,
        size:2,
        depth:1
    }) 
    const aboutMongoDBskillsGeometry = new TextGeometry('MongoDB', {
        font:font,
        size:2,
        depth:1
    }) 
    const aboutExpressskillsGeometry = new TextGeometry('Express', {
        font:font,
        size:2,
        depth:1
    })

    const aboutThreeskillsGeometry = new TextGeometry('ThreeJs', {
        font:font,
        size:2,
        depth:1
    })

    const aboutPythonskillsGeometry = new TextGeometry('Python', {
        font:font,
        size:2,
        depth:1
    })
    const aboutJavascriptskillsGeometry = new TextGeometry('JavaScript', {
        font:font,
        size:2,
        depth:1
    })
    
    const aboutProjectGeometry = new TextGeometry('Projects', {
        font:font,
        size:10,
        depth:1
    })

    const aboutGameGeometry = new TextGeometry('Games', {
        font:font,
        size:10,
        depth:1
    })


  return (
    <RigidBody type='fixed'>

      <mesh rotation={[0.3,-9.4,0]} position={[40,7,-80]}>
        <primitive object={textGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
      <mesh rotation={[0.3,-9.4,0]} position={[40,20,-40]}>
        <primitive object={aboutdevGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>

      <mesh rotation={[0,-9,0]} position={[40,30,0]}>
        <primitive object={aboutskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>



      <group rotation={[0,-0.3,0]} position={[0,-6,40]}>

      <mesh rotation={[0,-9.3,0]} position={[0,50,-10]}>
        <primitive object={aboutDjangoskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
      <mesh rotation={[0,-9.3,0]} position={[-30,30,-10]}>
        <primitive object={aboutNodeskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh><mesh rotation={[0,-9.3,0]} position={[0,30,-10]}>
        <primitive object={aboutExpressskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh><mesh rotation={[0,-9.3,0]} position={[0,40,-10]}>
        <primitive object={aboutReactskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh><mesh rotation={[0,-9.3,0]} position={[-15,40,-10]}>
        <primitive object={aboutMongoDBskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh><mesh rotation={[0,-9.3,0]} position={[-15,30,-10]}>
        <primitive object={aboutPythonskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh><mesh rotation={[0,-9.3,0]} position={[-30,40,-10]}>
        <primitive object={aboutJavascriptskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
      <mesh rotation={[0,-9.3,0]} position={[-15,50,-10]}>
        <primitive object={aboutThreeskillsGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
        
      </group>

      <mesh rotation={[0,-9,0]} position={[60,30,40]}>
        <primitive object={aboutProjectGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>

      <mesh rotation={[0,-11,0]} position={[-150,30,40]}>
        <primitive object={aboutGameGeometry}/>
        <meshBasicMaterial color='black'/>
      </mesh>
      </RigidBody>

  )
}
