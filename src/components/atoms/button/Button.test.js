import React from 'react'
import renderer from 'react-test-renderer'

import Button from './Button'

it('test to see if the Button renders correctly', () => {
  const tree = renderer.create(<Button>Smoke Test</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
