import { Skill as SkillType } from 'types'
import Image from 'next/image'

export default function Skill({ name, iconURL }: SkillType) {
  return (
    <div className='skill'>
      <i className='skill-icon'>
        <Image src={iconURL} alt={`${name} icon`} width={40} height={40} />
      </i>
      <label className='skill-name'>{name}</label>
    </div>
  )
}
