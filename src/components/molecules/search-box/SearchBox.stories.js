import React from 'react'
// import { action } from '@storybook/addon-actions'

import { InputGroup } from "react-bootstrap"

import Dropdown from '../../molecules/dropdown'

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
      <Dropdown as={InputGroup.Prepend} title="Search Options">
        <Dropdown.Item>Testing</Dropdown.Item>
        <Dropdown.Item>Testing</Dropdown.Item>
      </Dropdown>
    </SearchBox>
  </>
)
