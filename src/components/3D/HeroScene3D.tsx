import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';

export const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#6366f1" />
          <pointLight position={[5, 5, 5]} intensity={0.2} color="#8b5cf6" />
          
          {/* Floating geometric shapes */}
          <FloatingGeometry 
            position={[-3, 2, -2]} 
            color="#8b5cf6" 
            shape="octahedron" 
            scale={0.8}
          />
          <FloatingGeometry 
            position={[3, -1, -1]} 
            color="#06b6d4" 
            shape="torus" 
            scale={1.2}
          />
          <FloatingGeometry 
            position={[-2, -2, -3]} 
            color="#3b82f6" 
            shape="sphere" 
            scale={0.6}
          />
          <FloatingGeometry 
            position={[2, 2, -2]} 
            color="#ec4899" 
            shape="box" 
            scale={0.7}
          />
          <FloatingGeometry 
            position={[0, -3, -1]} 
            color="#10b981" 
            shape="octahedron" 
            scale={0.9}
          />
          
          {/* Particle field */}
          <ParticleField count={200} color="#6366f1" />
          
          {/* Subtle orbit controls for desktop interaction */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};