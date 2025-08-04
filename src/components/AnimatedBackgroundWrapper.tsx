'use client';
import dynamic from 'next/dynamic';

const AnimatedBackground = dynamic(
  () => import('./AnimatedBackgroundInner'),
  { ssr: false } // 💥 prevents server-side rendering
);

export default function AnimatedBackgroundWrapper() {
  return <AnimatedBackground />;
}
