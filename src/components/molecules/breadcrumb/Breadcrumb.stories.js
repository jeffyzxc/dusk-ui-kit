import React from 'react'
// import { action } from '@storybook/addon-actions'

import Breadcrumb from './Breadcrumb'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    notes: readme,
    jest: ['Breadcrumb.test.js'],
  },
}

export const breadcrumb = () => (
  <>
    <Breadcrumb>
      <Breadcrumb.Item>Breadcrumb item 1</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb item 2</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb item 3</Breadcrumb.Item>
    </Breadcrumb>
  </>
)
