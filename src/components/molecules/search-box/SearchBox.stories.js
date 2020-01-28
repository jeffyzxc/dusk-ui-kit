import React from 'react'
// import { action } from '@storybook/addon-actions'

import DropdownItem from '../../atoms/dropdown-item/DropdownItem'

import SearchBox from './SearchBox'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/SearchBox',
  component: SearchBox,
  parameters: {
    notes: readme,
    jest: ['SearchBox.test.js'],
  },
}

export const searchbox = () => (
  <>
    <SearchBox />
  </>
)

export const searchboxWithDropDown = () => (
  <>
    <SearchBox>
      <DropdownItem>Testing</DropdownItem>
      <DropdownItem>Testing</DropdownItem>
    </SearchBox>
  </>
)
