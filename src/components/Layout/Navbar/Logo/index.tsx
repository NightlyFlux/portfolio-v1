import { IoRocket } from 'react-icons/io5'

export default function Logo() {
  const name = 'Salvador G.'

  return (
    <span className='logo'>
      <i className='logo-icon'>
        <IoRocket />
      </i>
      <span className='logo-text'>
        {name.split('').map((letter, index) => (
          <span key={index} className='logo-letter'>
            {letter}
          </span>
        ))}
      </span>
    </span>
  )
}
