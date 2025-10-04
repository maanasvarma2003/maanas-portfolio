import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CodeCube = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={color} transparent opacity={0.5} wireframe />
      </mesh>
    </Float>
  );
};

const DataSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshPhongMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

export const ProjectsScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.7} color="#f59e0b" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ec4899" />
        
        <CodeCube position={[-2, 1, 0]} color="#f59e0b" scale={0.8} />
        <CodeCube position={[2.5, -1, -1]} color="#06b6d4" scale={0.6} />
        <DataSphere position={[0, 2, -2]} color="#ec4899" />
        <CodeCube position={[-3, -1.5, 0]} color="#8b5cf6" scale={0.7} />
        <DataSphere position={[3, 1, -1]} color="#10b981" />
        <CodeCube position={[0, -2, 1]} color="#3b82f6" scale={0.5} />
      </Canvas>
    </div>
  );
};
