import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
  position: [number, number, number];
  color: string;
  shape: 'box' | 'sphere' | 'torus' | 'octahedron';
  scale?: number;
}

export const FloatingGeometry = ({ position, color, shape, scale = 1 }: FloatingGeometryProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
      case 'sphere':
        return new THREE.SphereGeometry(0.3, 32, 32);
      case 'torus':
        return new THREE.TorusGeometry(0.3, 0.1, 16, 100);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.4);
      default:
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
    }
  }, [shape]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale}
        geometry={geometry}
      >
        <meshPhongMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          shininess={100}
        />
      </mesh>
    </Float>
  );
};