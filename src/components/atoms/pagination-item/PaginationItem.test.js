import React from 'react'
import renderer from 'react-test-renderer'

import PaginationItem from './'

it('test to see if the PaginationItem renders correctly', () => {
  const tree = renderer.create(<PaginationItem>Smoke Test</PaginationItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
