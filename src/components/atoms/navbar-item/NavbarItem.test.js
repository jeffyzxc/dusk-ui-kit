import React from 'react'
import renderer from 'react-test-renderer'

import NavbarItem from './NavbarItem'

it('test to see if the NavbarItem renders correctly', () => {
  const tree = renderer.create(<NavbarItem>Smoke Test</NavbarItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
