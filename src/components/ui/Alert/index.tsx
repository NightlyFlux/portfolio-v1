import { PropsWithChildren } from 'react'

export default function Alert({ children }: PropsWithChildren) {
  return (
    <div className='alert' role='alert'>
      {children}
    </div>
  )
}
