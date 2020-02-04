/* @flow */
import * as React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

export const PagingTableVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
}

type Props = {
  className: string,
  data: array,
  columns: array,
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger',
}

const pagingOptions = {
  // pageStartIndex: 0,
  sizePerPage: 6,
  hideSizePerPage: true,
  hidePageListOnlyOnePage: true,
}

const PagingTable = (props: Props): React.Element<*> => {
  const { className, data, columns, variant } = props
  let updatedClassname = `__duk-paging-table ${className}`
  switch (variant) {
    case 'primary':
      updatedClassname += '__duk-paging-table--primary'
      break
    default:
      break
  }
  return (
    <BootstrapTable
      classes={updatedClassname}
      keyField="id"
      data={data}
      columns={columns}
      bootstrap4
      pagination={paginationFactory(pagingOptions)}
      bordered={false}
    />
  )
}

PagingTableVariants.defaultProps = {
  className: '',
  data: [],
  columns: [],
  variant: PagingTableVariants.PRIMARY,
}

export default PagingTable
