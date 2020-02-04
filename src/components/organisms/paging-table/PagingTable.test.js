import React from 'react'
import renderer from 'react-test-renderer'

import PagingTable from './PagingTable'

it('test to see if the Header renders correctly', () => {
  const tree = renderer.create(<PagingTable />).toJSON()
  expect(tree).toMatchSnapshot()
})
