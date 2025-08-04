'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import p5 from 'p5';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';

export default function AnimatedBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    if (!effectRef.current && vantaRef.current) {
      effectRef.current = TOPOLOGY({
        el: vantaRef.current,
        THREE,
        p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 100.0,
        minWidth: 100.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x9cb343,
        backgroundColor:0x222222,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
      }
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
