import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const BriefcaseShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.7, 0.5, 0.3]} />
        <meshPhongMaterial color="#10b981" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

const TrendingArrow = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <coneGeometry args={[0.3, 0.8, 4]} />
        <meshPhongMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const TeamCircle = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.015;
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.4, 0.15, 16, 100]} />
        <meshPhongMaterial color="#f59e0b" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

export const ExperienceScene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 0, 0]} intensity={0.5} color="#10b981" />
      
      <BriefcaseShape position={[-2, 1, 0]} />
      <BriefcaseShape position={[2, -1, -1]} />
      <TrendingArrow position={[3, 1, -2]} />
      <TrendingArrow position={[-3, -1, 1]} />
      <TeamCircle position={[0, 2, 0]} />
      <TeamCircle position={[1, -2, -1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
};
