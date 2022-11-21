import { Html, useProgress } from '@react-three/drei'
import Heading from '../Heading'

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <Heading as='h2'>Loading...</Heading>
      {progress.toFixed(2)}%
    </Html>
  )
}
