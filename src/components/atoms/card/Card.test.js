import React from 'react'
import renderer from 'react-test-renderer'

import Card from './Card'

it('test to see if the Card renders correctly', () => {
  const tree = renderer.create(<Card />).toJSON()
  expect(tree).toMatchSnapshot()
})
