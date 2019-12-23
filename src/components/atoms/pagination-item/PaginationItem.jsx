/* @flow */
import * as React from 'react'
import BootstrapPaginationItem from 'react-bootstrap/PageItem'

import './PaginationItem.scss'

type Props = {
  className: string,
  active: boolean,
  activeLabel: string,
  children: React.Node,
}

const PaginationItem = (props: Props): React.Element<*> => {
  const { className, active, activeLabel, children } = props
  const updatedClassName = `__duk-pagination-item ${className}`
  return (
    <BootstrapPaginationItem active={active} activeLabel={activeLabel} className={updatedClassName}>
      {children}
    </BootstrapPaginationItem>
  )
}

PaginationItem.defaultProps = {
  className: '',
  active: false,
  activeLabel: 'current',
}

export default PaginationItem
