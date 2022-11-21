import loadable from '@loadable/component'
import { IconBaseProps } from 'react-icons/lib'

type Props = {
  nameIcon: string
  propsIcon?: IconBaseProps
}

export default function Icon({ nameIcon, propsIcon }: Props) {
  const lib = nameIcon.substring(0, 2).toLowerCase()

  const ElementIcon = loadable(() => import(`react-icons/${lib}/index.js`), {
    resolveComponent: (el) =>
      el[nameIcon] != null ? el[nameIcon] : el[Object.keys(el['default'])[0]],
  })

  return <ElementIcon {...propsIcon} />
}
