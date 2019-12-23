import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './Footer'

it('test to see if the Footer renders correctly', () => {
  const tree = renderer.create(<Footer>Smoke Test</Footer>).toJSON()
  expect(tree).toMatchSnapshot()
})
