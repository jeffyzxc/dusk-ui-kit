/* @flow */
import * as React from 'react'
import BootstrapDropdownItem from 'react-bootstrap/DropdownItem'

type Props = {
  children: React.Node,
  href?: string,
}

const DropdownItem = (props: Props): React.Element<*> => {
  const { children, href } = props
  // Extend defaults here...
  return <BootstrapDropdownItem href={href}>{children}</BootstrapDropdownItem>
}

DropdownItem.defaultProps = {
  href: '#',
}

export default DropdownItem
