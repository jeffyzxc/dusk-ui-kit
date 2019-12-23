/* @flow */
import * as React from 'react'
import BootstrapNav from 'react-bootstrap/Nav'

import NavbarItem from '../../atoms/navbar-item'

import './Navbar.scss'

type Props = {
  children: React.Node,
  className: string,
}

const Navbar = (props: Props): React.Element<*> => {
  const { children, className } = props
  const updatedClassName = `__duk-navbar ${className}`
  return <BootstrapNav className={updatedClassName}>{children}</BootstrapNav>
}

Navbar.defaultProps = {
  className: '',
}

Navbar.Item = NavbarItem

export default Navbar
