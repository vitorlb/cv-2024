import React, { useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { useFrame } from '@react-three/fiber'

function Box(props) {
  const ref = useRef()

  useFrame((_, delta) => {
      ref.current.rotation.x += 1 * delta
      ref.current.rotation.y += 0.5 * delta
  })

  return (
      <mesh {...props} ref={ref}>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} />
      </mesh>
  )
}

export default Box;