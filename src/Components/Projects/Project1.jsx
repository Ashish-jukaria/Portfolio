import React from 'react'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';



export default function Project1({handleClick}) {
    const font = useLoader(FontLoader, '/helvetiker_regular.typeface.json');

    const textGeometry1 = new TextGeometry('Blogger', {
        font: font,
        size: 3,
        depth: 0.5,
    
       
      });

      const textGeometry = new TextGeometry('Click Me', {
        font: font,
        size: 3,
        depth: 0.5,
    
       
      });

      const bodyGeometry = new TextGeometry('Your Own Personal Blogging App', {
        font: font,
        size: 2,
        depth: 0.1,
    
       
      });
  return (
    <mesh position={[40, 0, -10]}   rotation={[-Math.PI / 2,0,-3.1]} onClick={() => handleClick(1)}
   >          <mesh position={[-0.7, 10, 0]} >
              <primitive object={textGeometry1}  rotation={[0,0,0]} />
              <meshStandardMaterial color="black" />
   </mesh>
              <mesh position={[-0.7, -10, 0]}>
                <primitive object={textGeometry} position={[-0.7, 0, 0]}  rotation={[0,0,0]} />
                <meshStandardMaterial color="black" />
              </mesh>

              <mesh position={[-10, 0, 0]}>
                <primitive object={bodyGeometry} position={[-0.7, 0, 0]}  rotation={[0,0,0]} />
                <meshStandardMaterial color="black" />
              </mesh>
            </mesh>
  )
}
