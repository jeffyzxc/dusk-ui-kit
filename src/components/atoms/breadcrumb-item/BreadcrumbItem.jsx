/* @flow */
import * as React from 'react'
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem'

type Props = {
  children: React.Node,
  href?: string,
}

const BreadcrumbItem = (props: Props): React.Element<*> => {
  const { children, href } = props
  // Extend defaults here...
  return <BootstrapBreadcrumbItem href={href}>{children}</BootstrapBreadcrumbItem>
}

BreadcrumbItem.defaultProps = {
  href: '#',
}

export default BreadcrumbItem
