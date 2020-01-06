/* @flow */
import * as React from 'react'
import BootstrapNavbar from 'react-bootstrap/Navbar'

import Logo, { LogoSizes } from '../../atoms/logo/Logo'
import Navbar from '../../molecules/navbar'

export const HeaderVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
}

type Props = {
  className: string,
  url?: string,
  title?: string,
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger',
  children: React.Node,
}

const Header = (props: Props): React.Element<*> => {
  const { className, url, title, variant, children } = props
  const updatedClassname = `__duk-header ${className}`
  let updatedVariant
  switch (variant) {
    case 'primary':
      updatedVariant = `subprimary`
      break
    default:
      updatedVariant = variant
  }
  const collapseId = Math.random()
    .toString(36)
    .substring(7)
  return (
    <header className={updatedClassname}>
      <BootstrapNavbar variant="dark" bg={updatedVariant} expand="lg" className={className}>
        <BootstrapNavbar.Brand href={url}>
          <Logo size={LogoSizes.SMALL} />
          <h1 className="__duk-header__brand-title ml-5 mb-0 text-white d-inline-block h6">
            {title}
          </h1>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls={collapseId} />
        <BootstrapNavbar.Collapse id={collapseId} className="pt-2 pt-lg-0">
          <Navbar className="ml-auto text-right">{children}</Navbar>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </header>
  )
}

Header.defaultProps = {
  className: '',
  url: '#',
  title: '',
  variant: HeaderVariants.PRIMARY,
}

export default Header
