/* @flow */
import * as React from 'react'

import './Footer.scss'

export const FooterVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
}

type Props = {
  className: string,
  children: React.Node,
  variant?: string,
}

const Footer = (props: Props): React.Element<*> => {
  const { className, children, variant } = props
  let updatedClassname = `__duk-footer ${className} `
  switch (variant) {
    case 'primary':
      updatedClassname += `bg-primary text-white`
      break
    case 'secondary':
      updatedClassname += `bg-secondary text-white`
      break
    case 'info':
      updatedClassname += `bg-info text-white`
      break
    case 'success':
      updatedClassname += `bg-success text-white`
      break
    case 'warning':
      updatedClassname += `bg-warning text-white`
      break
    case 'danger':
      updatedClassname += `bg-danger text-white`
      break
    default:
      updatedClassname = `bg-primary text-white`
  }
  return <footer className={updatedClassname}>{children}</footer>
}

Footer.defaultProps = {
  className: '',
  variant: FooterVariants.PRIMARY,
}

export default Footer
