import * as ReactFeatherIcon from 'react-feather'

export function Icon({ name }) {
  const IconRender = ReactFeatherIcon[name] ? ReactFeatherIcon[name] : null

  return <IconRender />
}

