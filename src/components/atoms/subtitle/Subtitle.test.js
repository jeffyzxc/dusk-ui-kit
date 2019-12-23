import React from 'react'
import renderer from 'react-test-renderer'

import Subtitle from './Subtitle'

it('test to see if the Subtitle renders correctly', () => {
  const tree = renderer.create(<Subtitle>Smoke Test</Subtitle>).toJSON()
  expect(tree).toMatchSnapshot()
})
