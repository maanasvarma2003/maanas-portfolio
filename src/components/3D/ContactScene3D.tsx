import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const MailEnvelope = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.015;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        <mesh>
          <boxGeometry args={[0.8, 0.6, 0.1]} />
          <meshPhongMaterial color="#ec4899" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
};

const MessageBubble = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhongMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

const ConnectNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.3]} />
        <meshPhongMaterial color="#8b5cf6" transparent opacity={0.7} />
      </mesh>
    </Float>
  );
};

export const ContactScene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 0, 0]} intensity={0.5} color="#ec4899" />
      <pointLight position={[5, 0, 0]} intensity={0.5} color="#06b6d4" />
      
      <MailEnvelope position={[0, 1, 0]} />
      <MailEnvelope position={[-3, -1, -1]} />
      <MessageBubble position={[2, 2, -2]} />
      <MessageBubble position={[-2, -2, 1]} />
      <ConnectNode position={[3, -1, 0]} />
      <ConnectNode position={[-1, 2, -1]} />
      <ConnectNode position={[1, -1, 1]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};
