/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 .\shoe.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('./assets/gltf/shoe/shoe.gltf')
  const shoe = useRef();
  useFrame((state, delta, xrFrame) => {
    shoe.current.rotateY(delta/10);
  });
  return (
    // THREE.Object3D ready to be rendered.
    <group {...props} dispose={null} scale={4} rotation={[0,-Math.PI/8,0]} ref={shoe}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.colorChanges.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.colorChanges.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.colorChanges.inner} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.colorChanges.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={0x000000} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.colorChanges.laces} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.colorChanges.laces} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.colorChanges.laces} />
    </group>
  )
}

// useGLTF.preload('/shoe.gltf')
