import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'

function TetraHead(props) {
  const ref = useRef()

  useEffect(() => {
    ref.current.rotation.x = props.initialRotation?.x ? props.initialRotation?.x : 0
    ref.current.rotation.y = props.initialRotation?.y ? props.initialRotation?.y : 0
    ref.current.rotation.z = props.initialRotation?.z ? props.initialRotation?.z : 0
  })

  useFrame((_, delta) => {
    if(!!props.animatingRotation) {
        if(props.animatingRotation.x) {
         !!props.animatingRotation.x.direction
            ? ref.current.rotation.x += props.animatingRotation.x.amount * delta
            : ref.current.rotation.x -= props.animatingRotation.x.amount * delta
        }
        if(props.animatingRotation.y) {
         !!props.animatingRotation.y.direction
            ? ref.current.rotation.y += props.animatingRotation.y.amount * delta
            : ref.current.rotation.y -= props.animatingRotation.y.amount * delta
        }
        if(props.animatingRotation.z) {
         !!props.animatingRotation.z.direction
            ? ref.current.rotation.z += props.animatingRotation.z.amount * delta
            : ref.current.rotation.z -= props.animatingRotation.z.amount * delta
        }
    }
  })

  return (
      <mesh {...props.mesh} ref={ref}>
          <tetrahedronGeometry args={[2.9,0]} />
          <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
  )
}

export default TetraHead;