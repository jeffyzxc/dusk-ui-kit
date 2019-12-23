import React from 'react'
// import { action } from '@storybook/addon-actions'

import Pagination from './Pagination'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/Pagination',
  component: Pagination,
  parameters: {
    notes: readme,
    jest: ['Pagination.test.js'],
  },
}

export const pagination = () => (
  <>
    <Pagination>
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
    </Pagination>
  </>
)
