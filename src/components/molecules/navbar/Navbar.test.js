import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'

it('test to see if the Navbar renders correctly', () => {
  const tree = renderer.create(<Navbar>Smoke Test</Navbar>).toJSON()
  expect(tree).toMatchSnapshot()
})
