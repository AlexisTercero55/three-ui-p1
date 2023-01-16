import { BoxHelper, SpotLightHelper, PointLightHelper } from "three";
import {Canvas} from '@react-three/fiber';
import {OrbitControls,
        useHelper, useGLTF, TransformControls} from '@react-three/drei'

import { useState, useRef, Suspense } from 'react'
// import './App.css'

import { Model } from './Shoe';

function Lights(props) {
  const light = useRef();
  {/* <spotLight  ref={spotLight}
                        intensity={0.9} 
                        angle={0.1} 
                        penumbra={1}
                        position={[10,15,10]}
                        castShadow={true}
            /> */}
  return (
    <spotLight  //{ref={light}}
                intensity={1} 
                angle={1} 
                // penumbra={5}
                position={[-3,2,10]}
                castShadow={true}
    />
  );
}

function AnimatedModel(props)
{
  return (<Model 
          colorChanges = {{
          mesh : props.colors.mesh,
          laces : props.colors.details,
          inner : props.colors.inner
        }} />);
}

function PrimiriveScene(props) 
{
  return (
      <Canvas className='canvas_'>
        {/* <TransformControls mode="translate"> */}
        <Lights />
        {/* </TransformControls> */}
        <ambientLight intensity={0.5}/>
        <Suspense fallback={null}>
          <AnimatedModel colors={props.colors} />
        </Suspense>
        <OrbitControls enablePan={true} 
                        enableZoom={true}
                        enableRotate={true} 
        />
        {/* <Model></Model> */}
      </Canvas>
  );
}

export default PrimiriveScene