/* @flow */
/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
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
  data: Array<Object>,
  columns: Array<Object>,
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
  let updatedClassname = `__duk-paging-table table-borderless ${className}`
  switch (variant) {
    case 'primary':
      updatedClassname += '__duk-paging-table--primary'
      break
    default:
      break
  }
  return (
    <>
      <Global
        styles={css`
          .react-bootstrap-table .__duk-paging-table {
            table-layout: auto;
            thead, tbody {
              border-bottom: 1px solid #dbd9d6;
            }
          }
        `}
      />
      <BootstrapTable
        classes={updatedClassname}
        keyField="id"
        data={data}
        columns={columns}
        bootstrap4
        pagination={paginationFactory(pagingOptions)}
        bordered={false}
      />
  </>
  )
}

PagingTable.defaultProps = {
  className: '',
  data: [],
  columns: [],
  variant: PagingTableVariants.PRIMARY,
}

export default PagingTable
