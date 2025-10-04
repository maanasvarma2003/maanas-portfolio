import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GraduationCap = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.003;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        {/* Cap top */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.8, 0.1, 0.8]} />
          <meshPhongMaterial color="#10b981" transparent opacity={0.8} />
        </mesh>
        {/* Cap base */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.5, 0.3, 4]} />
          <meshPhongMaterial color="#06b6d4" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
};

const BookStack = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
      <group ref={groupRef} position={position}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.7]} />
          <meshPhongMaterial color="#8b5cf6" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.15, 0.7]} />
          <meshPhongMaterial color="#ec4899" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
};

const SchoolBuilding = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#f59e0b" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

export const EducationScene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 0, 0]} intensity={0.5} color="#10b981" />
      <pointLight position={[5, 0, 0]} intensity={0.5} color="#8b5cf6" />
      
      <GraduationCap position={[0, 1, 0]} />
      <GraduationCap position={[-3, -1, -1]} />
      <BookStack position={[2, 0, 1]} />
      <BookStack position={[-2, 2, -2]} />
      <SchoolBuilding position={[3, -1, 0]} />
      <SchoolBuilding position={[-1, -2, 1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
};
