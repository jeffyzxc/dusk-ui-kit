/* @flow */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import uuid from 'react-uuid'
import BootstrapDropdown from 'react-bootstrap/Dropdown'

import DropdownItem from '../../atoms/dropdown-item/DropdownItem'

type Props = {
  as: elementType,
  children: React.Node,
  className: string,
  onToggle: Function,
  onSelect: Function,
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger',
}

const Dropdown = (props: Props): React.Element<*> => {
  const { children, className, onToggle, onSelect, variant, as } = props
  const updatedClassName = `__duk-dropdown ${className}`
  return (
    <BootstrapDropdown as={as} className={updatedClassName} onToggle={onToggle} onSelect={onSelect}>
      <BootstrapDropdown.Toggle variant={variant} id={uuid()}>
        Dropdown
      </BootstrapDropdown.Toggle>
      <BootstrapDropdown.Menu>{children}</BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}

Dropdown.defaultProps = {
  as: React.createElement('div'),
  className: '',
  onToggle: () => {},
  onSelect: () => {},
  variant: 'primary',
}

Dropdown.Item = DropdownItem

export default Dropdown
