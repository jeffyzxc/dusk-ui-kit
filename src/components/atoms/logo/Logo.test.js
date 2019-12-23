import React from 'react'
import renderer from 'react-test-renderer'

import Logo from './Logo'

it('test to see if the Logo renders correctly', () => {
  const tree = renderer.create(<Logo />).toJSON()
  expect(tree).toMatchSnapshot()
})
