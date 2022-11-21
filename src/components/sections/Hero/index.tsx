import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Loader from 'components/ui/Loader'
import VoxelRoom from 'components/VoxelRoom'
import { Suspense } from 'react'

export default function Hero() {
  return (
    <section id='hero'>
      <Canvas className='hero-canvas'>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <VoxelRoom />
        </Suspense>
      </Canvas>
    </section>
  )
}
