import React from 'react'
import { useGLTF,useAspect } from '@react-three/drei'
import { useLoader,useThree } from '@react-three/fiber'
import { TextureLoader, VideoTexture, RepeatWrapping } from 'three'
import { useEffect,useRef } from 'react'
import * as THREE from 'three'

export function Abandoned_billboard(props) {
  const { nodes, materials } = useGLTF('/abandoned_billboard.glb')

  const texture=useLoader(TextureLoader,props.texture)
  const { viewport } = useThree()
  texture.offset.set(0.19, 0.19); // Offset (start at 25% horizontally and vertically)
texture.repeat.set(0.45, 0.45);   // Scale down to show 50% of the texture
texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping; // Prevent repetition
 

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.shield_low_uv_0.geometry} material={materials.material} scale={[3,1,9]}  position={[0, 33,0]} rotation={[-Math.PI/2,-1.6, 0]}>
        <meshBasicMaterial map={texture} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/abandoned_billboard.glb');
