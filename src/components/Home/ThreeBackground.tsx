// src/components/ThreeBackground/ThreeBackground.tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";

const ThreeBackground: React.FC = () => {
    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        >
            {/* Background stars */}
            <Stars radius={80} depth={50} count={4000} factor={4} fade />

            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 4, 5]} intensity={1.5} />

            {/* Animated 3D sphere */}
            <Sphere visible args={[1, 100, 200]} scale={2.8}>
                <MeshDistortMaterial
                    color="#6c63ff"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                />
            </Sphere>

            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    );
};

export default ThreeBackground;
