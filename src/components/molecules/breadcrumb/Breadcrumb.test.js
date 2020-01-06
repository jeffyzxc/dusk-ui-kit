import React from 'react'
import renderer from 'react-test-renderer'

import Breadcrumb from './Breadcrumb'

it('test to see if the Breadcrumb renders correctly', () => {
  const tree = renderer.create(<Breadcrumb>Smoke Test</Breadcrumb>).toJSON()
  expect(tree).toMatchSnapshot()
})
