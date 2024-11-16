import './App.css'
import { Suspense, useState } from 'react';
import {Canvas} from '@react-three/fiber'
import styled from 'styled-components'
import Ground from './Components/Ground/Ground';
import { OrbitControls ,KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier';
import { Character } from './Components/Character';
import CharacterController from './Components/CharacterController/CharacterController';
import BillboardsController from './Components/BillboardsController/BillboardsController';
import ProjectData from './Components/ProjectData/ProjectData';
import * as THREE from 'three';
import About from './Components/About/TextBoxes/About';
import BreakWall from './Components/Games/BreakWall';
import BreakWallContainer from './Components/Games/BreakWallContainer';
import BowlingGame from './Components/Games/BowlingGame';
import { BowlingLane } from './Components/Games/BowlingLane';

const CanvasContainer=styled.div`
width:100%;
height:100%;

`
const keyboardMap=[
  {name:"forward",keys:["ArrowUp","KeyW"]},
  {name:"backward",keys:["ArrowDown","KeyS"]},
  {name:"left",keys:["ArrowLeft","KeyA"]},
  {name:"right",keys:["ArrowRight","KeyD"]},
  {name:"run",keys:["Shift"]},
  {name:"enter",keys:["Enter"]}
]
function App() {
  const [id,setId]=useState(null)


  return (
    <>
    <CanvasContainer>
      <KeyboardControls map={keyboardMap}>
        <Canvas
                camera={{ position: [3, 3, 3], near: 0.1, fov: 100 }}
                onCreated={({ scene }) => {
                  scene.fog = new THREE.Fog("#D3D3D3", 60, 100); // Fog color and range
                }}
>
        <ambientLight/>
        <Suspense fallback={null}>
          <Physics >
             <Ground/>
<CharacterController/>
<BillboardsController id={id} setId={setId}/>
<About/>
<BreakWallContainer/>
<BowlingGame/>
          </Physics>



          </Suspense>
        </Canvas>
        {id && <ProjectData setId={setId} id={id}/>}
        </KeyboardControls>

    </CanvasContainer>

    </>
  )
}

export default App
