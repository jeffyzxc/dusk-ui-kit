import React from 'react'
// import { action } from '@storybook/addon-actions'

import Navbar from './Navbar'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/Navbar',
  component: Navbar,
  parameters: {
    notes: readme,
    jest: ['Navbar.test.js'],
  },
}

export const navbar = () => (
  <>
    <Navbar>
      <Navbar.Item>Nav item 1</Navbar.Item>
      <Navbar.Item>Nav item 2</Navbar.Item>
      <Navbar.Item>Nav item 3</Navbar.Item>
    </Navbar>
  </>
)
