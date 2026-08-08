import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene3D from './Scene3D';

export default function CanvasContainer() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to 1) for THREE.js ease of use
      mouse.current.x = event.clientX - window.innerWidth / 2;
      mouse.current.y = event.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-wrapper">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D mouse={mouse.current} />
      </Canvas>
    </div>
  );
}
