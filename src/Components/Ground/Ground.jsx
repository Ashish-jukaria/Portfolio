import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import { Character } from '../Character'





export default function Ground() {
  return (
    <>
      <RigidBody  type="fixed" colliders="cuboid">
    <mesh name='ground' rotation={[-Math.PI/2,0,0]}>
        <planeGeometry args={[600,300]}   />
        <meshBasicMaterial color='#F8EBC1' side={THREE.DoubleSide}/>
    </mesh>

    </RigidBody>



    </>

  )
}
