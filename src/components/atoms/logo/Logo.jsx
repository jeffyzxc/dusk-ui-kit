/* @flow */
import * as React from 'react'

import LogoSvg from './Logo.svg'

import './Logo.scss'

type Props = {
  className: string,
  title: string,
  size?: 'small' | 'large',
}

export const LogoSizes = {
  SMALL: 'small',
  LARGE: 'large',
}

const Logo = (props: Props): React.Element<*> => {
  const { className, title, size } = props
  let updatedClassName = `__duk-logo ${className}`
  if (size === LogoSizes.SMALL) updatedClassName += ' __duk-logo--small'
  if (size === LogoSizes.LARGE) updatedClassName += ' __duk-logo--large'
  return <LogoSvg className={updatedClassName} title={title} />
}

Logo.defaultProps = {
  className: '',
  size: '',
  title: '',
}

export default Logo
