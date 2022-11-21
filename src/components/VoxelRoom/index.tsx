import { useFBX } from '@react-three/drei'

export default function VoxelRoom() {
  const fbx = useFBX('assets/models/ArcadeRoom/ArcadeRoom.fbx')
  return <primitive object={fbx} />
}
