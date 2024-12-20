/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 pins.glb 
Author: StaticDisturbance (https://sketchfab.com/StaticDisturbance)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sketchbook-6-bowling-pins-cf5bcdfda8864fbfbce8cfb05621beaf
Title: Sketchbook 6 - [Bowling Pins]
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Pins(props) {
  const collison = useRef(new Audio("/BowlingPin.mp3"));
  collison.current.volume = 0.2;
  function handleCollison(event) {
    collison.current.play();
  }

  function handleCollisonStop(event) {
    collison.current.pause();
    collison.current.currentTime = 0;
  }

  const { nodes, materials } = useGLTF("/pins.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody
        onCollisionEnter={handleCollison}
        onCollisionExit={handleCollisonStop}
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-9.177, 0.278, 0.411]} scale={0.188}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
        onCollisionEnter={handleCollison}
        onCollisionExit={handleCollisonStop}
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-5.294, 0.278, -2.76]} scale={0.188}>
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
        
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-5.294, 0.278, 3.68]} scale={0.188}>
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
        
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-1.475, 0.278, 0.411]} scale={0.188}>
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
       
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-1.475, 0.278, -6.255]} scale={0.188}>
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>{" "}
      </RigidBody>
      <RigidBody
       
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[-1.475, 0.278, 7.078]} scale={0.188}>
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
        
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[2.343, 0.278, -2.76]} scale={0.188}>
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_23.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>{" "}
      <RigidBody
        
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[2.343, 0.278, 3.68]} scale={0.188}>
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody
       
        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[2.343, 0.278, 10.541]} scale={0.188}>
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
      <RigidBody

        friction={0.2}
        restitution={1.4}
        mass={10}
      >
        <group position={[2.343, 0.278, -9.75]} scale={0.188}>
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials.Bowling_Pins_White}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Bowling_Pins_Stripes}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/pins.glb");
