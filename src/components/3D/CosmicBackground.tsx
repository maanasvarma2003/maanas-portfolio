import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface CosmicBackgroundProps {
  variant: 'stars' | 'nebula' | 'grid' | 'waves' | 'dna';
  color1?: string;
  color2?: string;
  speed?: number;
}

const StarField = ({ count = 500, color = '#6366f1' }: { count?: number; color?: string }) => {
  const ref = useRef<THREE.Points>(null!);
  
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sz[i] = Math.random() * 0.03 + 0.01;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color={color} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const NebulaCloud = ({ color1 = '#8b5cf6', color2 = '#06b6d4' }: { color1?: string; color2?: string }) => {
  const ref = useRef<THREE.Group>(null!);
  
  const clouds = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      scale: Math.random() * 1.5 + 0.5,
      color: i % 2 === 0 ? color1 : color2,
      speed: Math.random() * 0.5 + 0.2,
    }));
  }, [color1, color2]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <group ref={ref}>
      {clouds.map((cloud, i) => (
        <mesh key={i} position={cloud.position} scale={cloud.scale}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color={cloud.color} transparent opacity={0.04} />
        </mesh>
      ))}
    </group>
  );
};

const FloatingRings = ({ color = '#06b6d4' }: { color?: string }) => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {[1.5, 2.2, 3].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.5, 0]}>
          <torusGeometry args={[radius, 0.01, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.15 - i * 0.03} />
        </mesh>
      ))}
    </group>
  );
};

export const CosmicBackground = ({ variant, color1 = '#8b5cf6', color2 = '#06b6d4' }: CosmicBackgroundProps) => {
  return (
    <group>
      <StarField count={300} color={color1} />
      {variant === 'nebula' && <NebulaCloud color1={color1} color2={color2} />}
      {variant === 'waves' && <FloatingRings color={color2} />}
      {variant === 'grid' && <FloatingRings color={color1} />}
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.2} color={color1} />
      <pointLight position={[-5, -5, 5]} intensity={0.15} color={color2} />
    </group>
  );
};
