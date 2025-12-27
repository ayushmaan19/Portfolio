import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei'; // Added OrbitControls
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleCloud = (props) => {
  const ref = useRef();
  
  // Dense starfield
  const sphere = useMemo(() => random.inSphere(new Float32Array(960000), { radius: 5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={true}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

const NetworkBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <fog attach="fog" args={['#050505', 1.5, 4]} />
        <ParticleCloud />
        
        {/* INTERACTION CONTROLS */}
        <OrbitControls 
          enableZoom={false}      
          enablePan={false}       
          rotateSpeed={0.8}       
          autoRotate={false}      
        />
      </Canvas>
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_30%,#050505_100%)] pointer-events-none"></div>
    </div>
  );
};

export default NetworkBackground;