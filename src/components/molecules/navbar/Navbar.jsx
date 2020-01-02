/* @flow */
/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import * as React from 'react'
import BootstrapNav from 'react-bootstrap/Nav'

import NavbarItem from '../../atoms/navbar-item'

type Props = {
  children: React.Node,
  className: string,
}

const Navbar = (props: Props): React.Element<*> => {
  const { children, className } = props
  const updatedClassName = `__duk-navbar ${className}`
  return (
    <>
      <Global
        styles={{
          '.__duk-navbar .nav-link': {
            fontWeight: 300,
            '&:last-child': {
              paddingBottom: 0,
              paddingRight: 0,
            },
          },
        }}
      />
      <BootstrapNav className={updatedClassName}>{children}</BootstrapNav>
    </>
  )
}

Navbar.defaultProps = {
  className: '',
}

Navbar.Item = NavbarItem

export default Navbar
