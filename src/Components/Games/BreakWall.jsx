import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useRef, useState } from "react";

export default function BreakWall(props) {
  const collison=useRef(new Audio('/brickfall.mp3'))
  const firstcollison=useRef(true)
  const handleCollison=(event)=>{
    if (firstcollison.current){
      console.log(event)
      firstcollison.current=false
      return;
    }
    collison.current.play()
  }

  const handleCollisonStop=(event)=>{
    collison.current.stop()
    collison.current.currentTime=0
  }
  return (
    <>
    <group position={props.position}>      
        <group >
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 8]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 10]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 12]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 14]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 0, 16]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
      </group>

      <group>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 8]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 10]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 12]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 14]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 2, 16]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
      </group>
      <group>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 8]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 10]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 12]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 14]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 4, 16]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
      </group>

      <group>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 8]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 10]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 12]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 14]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 6, 16]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
      </group>

      <group>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 6]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 8]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 10]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 12]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 14]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>{" "}
        <RigidBody onCollisionEnter={handleCollison} onCollisionExit={handleCollisonStop}> 
          <mesh position={[-200, 8, 16]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color={props.color} />
          </mesh>
        </RigidBody>
      </group>
      </group>

    </>
  );
}
