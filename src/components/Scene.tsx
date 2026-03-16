import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

// An abstract 3D object to replace the avatar if we don't have a model
function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Subtle rotation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef}>
                {/* An interesting shape: Icosahedron */}
                <icosahedronGeometry args={[2, 2]} />
                {/* A cool distorted material */}
                <MeshDistortMaterial
                    color="#00f3ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={false}
                />
            </mesh>

            {/* Outer wireframe shell */}
            <mesh scale={1.2}>
                <icosahedronGeometry args={[2, 1]} />
                <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#bc13fe" />
                <AbstractShape />
                <Environment preset="city" />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
