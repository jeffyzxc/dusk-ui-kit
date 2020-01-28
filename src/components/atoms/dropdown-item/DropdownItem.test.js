import React from 'react'
import renderer from 'react-test-renderer'

import DropdownItem from './DropdownItem'

it('test to see if the DropdownItem renders correctly', () => {
  const tree = renderer.create(<DropdownItem>Smoke Test</DropdownItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
