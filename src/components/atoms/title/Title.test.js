import React from 'react'
import renderer from 'react-test-renderer'

import Title from './Title'

it('test to see if the Title renders correctly', () => {
  const tree = renderer.create(<Title>Smoke Test</Title>).toJSON()
  expect(tree).toMatchSnapshot()
})
