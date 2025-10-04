import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const BrainShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshPhongMaterial color="#8b5cf6" transparent opacity={0.7} wireframe />
      </mesh>
    </Float>
  );
};

const CodeBlock = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshPhongMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const DatabaseCylinder = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.4, 0.4, 0.8, 32]} />
        <meshPhongMaterial color="#10b981" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

export const SkillsScene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 0, 0]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[5, 0, 0]} intensity={0.5} color="#06b6d4" />
      
      <BrainShape position={[0, 2, -1]} />
      <BrainShape position={[-3, -1, 0]} />
      <CodeBlock position={[2, 0, 1]} />
      <CodeBlock position={[-2, 1, -2]} />
      <DatabaseCylinder position={[3, -2, 0]} />
      <DatabaseCylinder position={[-1, -2, 1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </Canvas>
  );
};
