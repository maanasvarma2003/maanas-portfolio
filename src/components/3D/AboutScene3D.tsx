import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const UserIcon = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.001;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Head */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhongMaterial color="#8b5cf6" transparent opacity={0.8} />
        </mesh>
        {/* Body */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.8, 32]} />
          <meshPhongMaterial color="#06b6d4" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
};

const HeartShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#ec4899" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

export const AboutScene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      
      <UserIcon position={[-2, 1, 0]} />
      <UserIcon position={[2, -1, -2]} />
      <HeartShape position={[3, 2, -1]} />
      <HeartShape position={[-3, -2, 1]} />
      <HeartShape position={[0, 0, -3]} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};
