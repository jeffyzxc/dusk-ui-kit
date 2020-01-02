/* @flow */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'

import LogoSvg from './Logo.svg'

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
  const updatedClassName = `__duk-logo ${className}`
  let width
  if (size === LogoSizes.SMALL) width = '96px'
  if (size === LogoSizes.LARGE) width = '100%'
  return (
    <LogoSvg
      className={updatedClassName}
      title={title}
      css={css`
        width: ${width};
      `}
    />
  )
}

Logo.defaultProps = {
  className: '',
  size: '',
  title: '',
}

export default Logo
