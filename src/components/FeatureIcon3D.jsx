import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';

const Geometries = ({ type, color }) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * (hovered ? 2 : 0.5);
        }
    });

    const materialProps = {
        color: hovered ? '#ffffff' : color,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
    };

    return (
        <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 2.2 : 2}
        >
            {type === 'cube' && <boxGeometry args={[1, 1, 1]} />}
            {type === 'sphere' && <icosahedronGeometry args={[0.8, 1]} />}
            {type === 'cone' && <coneGeometry args={[0.7, 1.4, 4]} />}
            {type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
            {type === 'octahedron' && <octahedronGeometry args={[0.9]} />}
            {type === 'knot' && <torusKnotGeometry args={[0.5, 0.15, 64, 8]} />}
            {type === 'tetrahedron' && <tetrahedronGeometry args={[1.2]} />}
            {type === 'dodecahedron' && <dodecahedronGeometry args={[0.8]} />}

            <meshStandardMaterial {...materialProps} />
        </mesh>
    );
};

const FeatureIcon3D = ({ type }) => {
    return (
        <div className="icon-canvas-container">
            <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#CBF382" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Geometries type={type} color="#CBF382" />
                </Float>
            </Canvas>
        </div>
    );
};

export default FeatureIcon3D;
