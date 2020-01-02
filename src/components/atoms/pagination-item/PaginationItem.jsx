/* @flow */
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import * as React from 'react'
import BootstrapPaginationItem from 'react-bootstrap/PageItem'

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
    <>
      <Global
        styles={{
          '.__duk-pagination-item.page-item .page-link': {
            borderRadius: 5,
          },
        }}
      />
      <BootstrapPaginationItem
        active={active}
        activeLabel={activeLabel}
        className={updatedClassName}
        css={css`
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        `}
      >
        {children}
      </BootstrapPaginationItem>
    </>
  )
}

PaginationItem.defaultProps = {
  className: '',
  active: false,
  activeLabel: 'current',
}

export default PaginationItem
