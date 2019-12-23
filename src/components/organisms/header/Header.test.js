import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

it('test to see if the Header renders correctly', () => {
  const tree = renderer.create(<Header>Smoke Test</Header>).toJSON()
  expect(tree).toMatchSnapshot()
})
