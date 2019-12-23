import React from 'react'
import renderer from 'react-test-renderer'

import Toggle from './Toggle'

it('test to see if the Toggle renders correctly', () => {
  const tree = renderer.create(<Toggle />).toJSON()
  expect(tree).toMatchSnapshot()
})
