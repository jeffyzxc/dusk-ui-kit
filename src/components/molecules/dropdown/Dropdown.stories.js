import React from 'react'
// import { action } from '@storybook/addon-actions'

import Dropdown from './Dropdown'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    notes: readme,
    jest: ['Dropdown.test.js'],
  },
}

export const dropdown = () => (
  <>
    <Dropdown>
      <Dropdown.Item>Dropdown item 1</Dropdown.Item>
      <Dropdown.Item>Dropdown item 2</Dropdown.Item>
      <Dropdown.Item>Dropdown item 3</Dropdown.Item>
    </Dropdown>
  </>
)
