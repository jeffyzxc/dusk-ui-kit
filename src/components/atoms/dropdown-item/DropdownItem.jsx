/* @flow */
import * as React from 'react'
import BootstrapDropdownItem from 'react-bootstrap/DropdownItem'

type Props = {
  children: React.Node,
  href?: string,
  onClick: () => {},
  active: boolean,
}

const DropdownItem = (props: Props): React.Element<*> => {
  const { children, href, onClick, active } = props
  // Extend defaults here...
  return (
    <BootstrapDropdownItem href={href} onClick={onClick} active={active}>
      {children}
    </BootstrapDropdownItem>
  )
}

DropdownItem.defaultProps = {
  href: '#',
  onClick: () => {},
  active: false,
}

export default DropdownItem
