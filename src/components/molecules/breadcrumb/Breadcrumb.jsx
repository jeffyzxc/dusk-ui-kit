/* @flow */
/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import * as React from 'react'
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb'

import BreadcrumbItem from '../../atoms/breadcrumb-item'
import colors from '../../../config/colors'

type Props = {
  children: React.Node,
  className: string,
}

const Breadcrumb = (props: Props): React.Element<*> => {
  const { children, className } = props
  const updatedClassName = `__duk-breadcrumb ${className}`
  return (
    <>
      <Global
        styles={{
          '.__duk-breadcrumb .breadcrumb-item': {
            a: {
              opacity: 0.5,
              color: `${colors.gray900}`,
            },
            '&:last-child': {
              a: {
                opacity: 1,
              },
            },
          },
        }}
      />
      <BootstrapBreadcrumb className={updatedClassName}>{children}</BootstrapBreadcrumb>
    </>
  )
}

Breadcrumb.defaultProps = {
  className: '',
}

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
