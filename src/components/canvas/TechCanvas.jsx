// src/components/canvas/TechCanvas.jsx
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Html, OrbitControls } from "@react-three/drei";

const TechCanvas = ({ slice }) => {
  const groupRef = useRef();

  const techItems = useMemo(
    () =>
      slice.items.map(({ tech_color, tech_name }, index) => ({
        name: tech_name,
        color: tech_color || "white",
        position: [
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
        ],
      })),
    [slice.items]
  );

  // Rotate the group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust speed if needed
    }
  });

  return (
    <section className="wrapper overflow-hidden">
      <h2>{slice.primary.title}</h2>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }} style={{ width: "100%", height: "500px" }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Test mesh - box */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <group ref={groupRef}>
          {techItems.map((item, index) => (
            <TechItem key={index} {...item} />
          ))}
        </group>
      </Canvas>
    </section>
  );
};

const TechItem = ({ name, color, position }) => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += Math.sin(performance.now() / 500) * 0.01;
    }
  });

  return (
    <group position={position}>
      <Text ref={meshRef} fontSize={1} color={color}>
        {name}
      </Text>
      <Html center>
        <span style={{ fontSize: "24px" }}>•</span>
      </Html>
    </group>
  );
};

export default TechCanvas;
