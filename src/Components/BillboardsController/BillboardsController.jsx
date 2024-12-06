import React, { useState } from 'react'
import { Abandoned_billboard } from '../Billboards/Abandoned_billboard'
import { RigidBody } from '@react-three/rapier'
import { useKeyboardControls} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import ProjectData from '../ProjectData/ProjectData'
import Project1 from '../Projects/Project1'
import Project3 from '../Projects/Project3'
import Project2 from '../Projects/Project2'
import Project4 from '../Projects/Project4'


export default function BillboardsController({id,setId}) {
    function handleClick(value){
        setId(value)
    }
  const [,get]=useKeyboardControls()
  const font = useLoader(FontLoader, '/helvetiker_regular.typeface.json');
  

  return (
    <>
<group position={[-120,0,70]}>
    <RigidBody type='fixed' lockRotations>
    <group>
    <Abandoned_billboard scale={1} position={[30,0,10]} texture={'/Blog.jpeg'}/>    
                  

    </group>
    <group>
    <Abandoned_billboard scale={1} position={[100,0,10]} texture={'/Course.jpeg'}/>
    
    </group>

    <group>
    <Abandoned_billboard scale={1} position={[180,0,10]} texture={'/chathub.png'}/>

    </group>

    {/* <group>
    

    <Abandoned_billboard scale={1} position={[180,0,30]} texture={'/Free.jpeg'}/>

    </group>

    <group>

    <Abandoned_billboard scale={1} position={[230,0,40]} texture={'/Free.jpeg'}/>
    
    </group> */}


   </RigidBody >
   <Project1 handleClick={handleClick} />
   <Project2 handleClick={handleClick} />
   <Project3 handleClick={handleClick} />

   {/* <Project3 handleClick={handleClick} />
   <Project4 handleClick={handleClick} /> */}

   
            
   </group>

   </>
  )
}
