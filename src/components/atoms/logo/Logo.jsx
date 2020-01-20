/* @flow */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'

import colors from '../../../styles/theme/dusk/export/colors.scss'

import LogoSvg from './logo.svg'

// import colors from '../../../config/colors'

type Props = {
  className: string,
  title: string,
  size?: 'small' | 'large',
  variant?: 'primary' | 'dark' | 'light',
}

export const LogoSizes = {
  SMALL: 'small',
  LARGE: 'large',
}

const Logo = (props: Props): React.Element<*> => {
  const { className, title, size, variant } = props
  const updatedClassName = `__duk-logo ${className}`
  let width
  if (size === LogoSizes.SMALL) width = '96px'
  if (size === LogoSizes.LARGE) width = '100%'
  let color
  if (variant === 'primary') color = colors.primary
  if (variant === 'dark') color = colors.dark
  if (variant === 'light') color = colors.light
  return (
    <LogoSvg
      className={updatedClassName}
      title={title}
      css={css`
        fill: ${color};
        width: ${width};
      `}
    />
  )
}

Logo.defaultProps = {
  className: '',
  size: '',
  title: '',
  variant: 'light'
}

export default Logo
