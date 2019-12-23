/* @flow */
import * as React from 'react'
import BootstrapNavLink from 'react-bootstrap/NavLink'

type Props = {
  children: React.Node,
  href?: string,
}

const NavbarItem = (props: Props): React.Element<*> => {
  const { children, href } = props
  // Extend defaults here...
  return <BootstrapNavLink href={href}>{children}</BootstrapNavLink>
}

NavbarItem.defaultProps = {
  href: '#',
}

export default NavbarItem
