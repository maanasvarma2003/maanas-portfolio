import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { CosmicBackground } from './CosmicBackground';

interface SectionSceneProps {
  variant: 'stars' | 'nebula' | 'grid' | 'waves' | 'dna';
  color1?: string;
  color2?: string;
  className?: string;
}

export const SectionScene = ({ variant, color1, color2, className = '' }: SectionSceneProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none opacity-40 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <CosmicBackground variant={variant} color1={color1} color2={color2} />
        </Suspense>
      </Canvas>
    </div>
  );
};
