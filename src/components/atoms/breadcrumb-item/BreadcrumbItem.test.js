import React from 'react'
import renderer from 'react-test-renderer'

import BreadcrumbItem from './'

it('test to see if the BreadcrumbItem renders correctly', () => {
  const tree = renderer.create(<BreadcrumbItem>Smoke Test</BreadcrumbItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
