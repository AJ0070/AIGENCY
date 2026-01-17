import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'three/examples/jsm/utils/BufferGeometryUtils';
// Note: BufferGeometryUtils isn't right for simple random positions helper in r3f ecosystem usually
// We'll use a custom function for random positions to avoid complexity with imports if standard math fails
import * as THREE from 'three';

const ParticleField = (props) => {
    const ref = useRef();

    // Generate random positions
    const count = 2000;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Spread particles across a large area
            positions[i * 3] = (Math.random() - 0.5) * 25;     // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 25; // z
        }
        return positions;
    }, [count]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#CBF382"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const ThreeBackground = () => {
    return (
        <div className="three-bg">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
            <style>{`
        .three-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1; /* Behind everything */
          opacity: 0.4; /* Subtle effect */
          pointer-events: none; /* Allow clicks through */
        }
      `}</style>
        </div>
    );
};

export default ThreeBackground;
