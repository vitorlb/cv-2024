import React, { useState, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import TetraHead from '../Solids/TetraHead';
import { Context as SolidsContext } from '../../../context/SolidsContext';
function Canvas1Inv() {
  const { state: solidsState, changeAnim } = useContext(SolidsContext);
  const [solid1, setSolid1] = useState({
    0: {animatingRotation: { x: { direction: false, amount: 0.9 } }},
    2: {animatingRotation: { x: { direction: true, amount: 1.5 }, z: { direction: true, amount: 1.5 } }},
    1: {animatingRotation: { x: { direction: false, amount: 0.9}, y: { direction: true, amount: 0.9} }},
  });
  const [solid2, setSolid2] = useState({
    0:{animatingRotation: { x: { direction: false, amount: 0.9 } }},
    2:{animatingRotation: { x: { direction: false, amount: 1.5 }, z: { direction: false, amount: 1.5 } }},
    1: {animatingRotation: { x: { direction: true, amount: 0.9}, y: { direction: false, amount: 0.9}, z: { direction: true, amount: 0.9} }},
  });
  const [solid3, setSolid3] = useState({
    0:{animatingRotation: { y: { direction: false, amount: 0.9 } }},
    2:{animatingRotation: { y: { direction: true, amount: 1.5 }, x: { direction: true, amount: 1.5 } }},
    1:{animatingRotation: { x: { direction: false, amount: 0.9 } , y: { direction: false, amount: 0.9 }, z: { direction: false, amount: 0.9 } }}
  });
  const [solid4, setSolid4] = useState({
    0:{animatingRotation: { z: { direction: false, amount: 0.9 } }},
    2:{animatingRotation: { x: { direction: true, amount: 1.5 }, z: { direction: true, amount: 1.5 } }},
    1:{animatingRotation: { z: { direction: false, amount: 0.9 }, y: { direction: true, amount: 0.9 }  }}
  });
  return (
    <div onClick={() => {
      //
    }} style={{ height: '100%', width: '100%' }}>
      <Canvas>
        <TetraHead
          animatingRotation={{ ...solid1[solidsState.animationIndex].animatingRotation }}
          mesh={{ position: [0, 0, 0] }}
        />
        <TetraHead
          animatingRotation={{ ...solid2[solidsState.animationIndex].animatingRotation }}
          initialRotation={{ y: 90 }}
          mesh={{ position: [0, 0, 0] }}
        />
        <TetraHead
          animatingRotation={{ ...solid3[solidsState.animationIndex].animatingRotation }}
          initialRotation={{ x: 180 }}
          mesh={{ position: [0, 0, 0] }}
        />
        <TetraHead
          animatingRotation={{ ...solid4[solidsState.animationIndex].animatingRotation }}
          initialRotation={{ x: 180, y: 90 }}
          mesh={{ position: [0, 0, 0] }}
        />
      </Canvas>
    </div>
  )
}

export default Canvas1Inv;