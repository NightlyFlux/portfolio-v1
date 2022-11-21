import classNames from 'classnames'

type Props = {
  className?: string
}

export default function Divider({ className }: Props) {
  return <hr className={classNames('divider', className)} />
}
