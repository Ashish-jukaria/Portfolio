import React from 'react'
import { Character } from '../Character'
import { AnyCollider, CapsuleCollider, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import {MathUtils, Vector3 } from 'three'
import {useControls} from "leva"
import {useFrame} from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { degToRad } from "three/src/math/MathUtils.js";
import { useState } from 'react'
import { useEffect } from 'react'

export default function CharacterController() {
    const rotationTarget=useRef(0)
    const [animation,setanimation]=useState('idle')
    const charbody=useRef()
    const container=useRef()
    const character=useRef()
    const cameraTarget=useRef()
    const cameraPosition=useRef()
    const cameraWorldPosition=useRef(new Vector3())
    const cameraLookAtWorldPosition=useRef(new Vector3())
    const cameraLookAt=useRef(new Vector3())
    const clicking=useRef(false)
    useEffect(()=>{

        function handlemousedown(){
            clicking.current=true
        }
        function handlemouseup(){
            clicking.current=false
        }
        document.addEventListener('mouseup',handlemouseup)
        document.addEventListener('mousedown',handlemousedown)

        return ()=>{
            document.removeEventListener('mouseup',handlemouseup)
            document.removeEventListener('mousedown',handlemousedown)
        }
        
    },[])
    const {WALK_SPEED,RUN_SPEED,ROTATION_SPEED}=useControls("Character Control",{
        WALK_SPEED: { value: 2, min: 0.1, max: 10, step: 0.1 },
        RUN_SPEED: { value: 20, min: 0.2, max: 20, step: 0.1 }, 
        ROTATION_SPEED: {
            value: degToRad(0.5),
            min: degToRad(0.1),
            max: degToRad(5),
            step: degToRad(0.1),
          },   })
    const [,get]=useKeyboardControls()
    useFrame(({ camera }) => {
        if (charbody.current){
            const vel=charbody.current.linvel();
            const movement={
                x:0,
                z:0
            }
            if (get().forward){
                movement.z=1
            }
            if (get().backward){
                movement.z= -1
            }  

            let speed=get().run?RUN_SPEED :WALK_SPEED
            
            if (get().left){
                movement.x= 1
            }   if (get().right){
                movement.x=-1
            }
            if (movement.x!=0){
                rotationTarget.current+=ROTATION_SPEED*movement.x
            }
            // if (clicking.current){
            //     movement.x=mouse.x
            //     movement.z=mouse.y
            // }

            if (movement.x!==0 || movement.z!==0){
                vel.x= speed*Math.sin(rotationTarget.current)
                vel.z= speed*Math.cos(rotationTarget.current)
              
                if (speed==RUN_SPEED){
                    setanimation('run')
                }
                else{
                    setanimation('walk')
                }

            }
            else{
                setanimation('idle')
            }
            charbody.current.setLinvel(vel,true)
        }

        container.current.rotation.y=MathUtils.lerp(container.current.rotation.y,rotationTarget.current,0.1)
        // Ensure that the camera and its position are available
        if (camera && camera.position) {
          // Get world position of cameraPosition
          cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
      
          // Smoothly move camera to the target position
          camera.position.lerp(cameraWorldPosition.current, 0.1);
      
          // Only perform the lookAt operation if cameraTarget exists
          if (cameraTarget.current) {
            cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
            cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);
            camera.lookAt(cameraLookAt.current);
          }
        }
      });
      
  return (
    <RigidBody colliders="cuboid" lockRotations ref={charbody}>
    <group ref={container} position={[0,0,-100]}>
    <group ref={cameraTarget} position-z={10} position-y={14} />
    <group ref={cameraPosition} position-y={20} position-z={-10} />
    <group ref={character}> 
    <Character scale={2} position-y={0}  animation={animation}/>
    </group>

    </group>


    </RigidBody>

 
  )
}
