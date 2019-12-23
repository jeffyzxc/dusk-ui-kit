import React from 'react'
import renderer from 'react-test-renderer'

import Feature from './Feature'

it('test to see if the Feature renders correctly', () => {
  const tree = renderer.create(<Feature>Smoke Test</Feature>).toJSON()
  expect(tree).toMatchSnapshot()
})
