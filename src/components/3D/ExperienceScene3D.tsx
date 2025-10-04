import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConnectedNode = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshPhongMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const OrbitRing = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.1, 16, 100]} />
        <meshPhongMaterial color={color} transparent opacity={0.4} wireframe />
      </mesh>
    </Float>
  );
};

export const ExperienceScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#10b981" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#06b6d4" />
        
        <ConnectedNode position={[-2, 1, 0]} color="#10b981" />
        <ConnectedNode position={[2, -1, -1]} color="#06b6d4" />
        <ConnectedNode position={[0, 2, -2]} color="#3b82f6" />
        <ConnectedNode position={[-3, -1, 0]} color="#8b5cf6" />
        <OrbitRing position={[0, 0, -1]} color="#10b981" />
      </Canvas>
    </div>
  );
};
