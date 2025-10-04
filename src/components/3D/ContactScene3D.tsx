import { Canvas } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MessageBubble = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={position} scale={scale}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshPhongMaterial color={color} transparent opacity={0.5} />
        </mesh>
        <mesh position={[-0.4, -0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.2, 0.3, 4]} />
          <meshPhongMaterial color={color} transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
};

const NetworkNode = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color={color} transparent opacity={0.7} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

export const ContactScene3D = () => {
  return (
    <div className="absolute inset-0 opacity-15">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#ec4899" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#06b6d4" />
        
        <MessageBubble position={[-2, 1, 0]} scale={1} color="#ec4899" />
        <MessageBubble position={[2.5, -1, -1]} scale={0.8} color="#06b6d4" />
        <NetworkNode position={[-3, -1, 0]} color="#8b5cf6" />
        <NetworkNode position={[3, 1.5, -1]} color="#10b981" />
        <MessageBubble position={[0, 2, -2]} scale={0.7} color="#f59e0b" />
        <NetworkNode position={[0, -2, 1]} color="#3b82f6" />
      </Canvas>
    </div>
  );
};
