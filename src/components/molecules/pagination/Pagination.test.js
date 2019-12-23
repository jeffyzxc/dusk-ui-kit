import React from 'react'
import renderer from 'react-test-renderer'

import SearchBox from './Pagination'

it('test to see if Pagination renders correctly', () => {
  const tree = renderer.create(<SearchBox />).toJSON()
  expect(tree).toMatchSnapshot()
})
