import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Custom component to render animated, interactive background particles
function BackgroundParticles({ mouse }) {
  const pointsRef = useRef();
  const { size } = useThree();

  // Generate particle positions
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorPalette = [
      new THREE.Color('#9333ea'), // Purple
      new THREE.Color('#2563eb'), // Blue
      new THREE.Color('#06b6d4'), // Cyan
    ];

    for (let i = 0; i < count; i++) {
      // Create a spiral galaxy pattern
      const r = Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const spiral = (theta * 2) + (Math.random() * 0.5); // Spiral arms

      pos[i * 3] = Math.cos(spiral) * r + (Math.random() - 0.5) * 1.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3; // thickness of galaxy disk
      pos[i * 3 + 2] = Math.sin(spiral) * r + (Math.random() - 0.5) * 1.5;

      // Assign colors based on distance or randomly from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    // Slowly rotate the galaxy
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      
      // Gentle sway based on mouse position
      const targetX = (mouse.x * 2) / size.width;
      const targetY = (mouse.y * 2) / size.height;
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetY * 0.2, 0.05);
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, targetX * 0.2, 0.05);
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// Custom interactive 3D Floating Geometry (Mesh)
function FloatingMesh({ mouse }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Constant rotation
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = time * 0.15;
      
      // Floating animation (y-axis)
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.3;

      // React to mouse movement by rotating towards cursor
      const targetX = (mouse.x / size.width) * 2;
      const targetY = -(mouse.y / size.height) * 2;
      meshRef.current.rotation.y += THREE.MathUtils.lerp(0, targetX * 0.5, 0.1);
      meshRef.current.rotation.x += THREE.MathUtils.lerp(0, targetY * 0.5, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[2.5, 0, 0]}
      scale={hovered ? 1.3 : 1.0}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color={hovered ? '#06b6d4' : '#9333ea'}
        wireframe
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

export default function Scene3D({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#9333ea" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#2563eb" />
      <directionalLight position={[0, 5, 5]} intensity={1.0} color="#06b6d4" />
      
      <BackgroundParticles mouse={mouse} />
      <FloatingMesh mouse={mouse} />
    </>
  );
}
