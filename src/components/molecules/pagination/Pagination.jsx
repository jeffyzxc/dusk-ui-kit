/* @flow */
import * as React from 'react'
import BootstrapPagination from 'react-bootstrap/Pagination'

import PaginationItem from '../../atoms/pagination-item'

type Props = {
  className: string,
  children: React.Node,
}

const Pagination = (props: Props): React.Element<*> => {
  const { className, children } = props
  const updatedClassName = `__duk-pagination ${className}`
  return <BootstrapPagination className={updatedClassName}>{children}</BootstrapPagination>
}

Pagination.defaultProps = {
  className: '',
}

Pagination.Item = PaginationItem

export default Pagination
