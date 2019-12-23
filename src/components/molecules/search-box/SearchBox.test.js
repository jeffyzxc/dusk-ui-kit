import React from 'react'
import renderer from 'react-test-renderer'

import SearchBox from './SearchBox'

it('test to see if the SearchBox renders correctly', () => {
  const tree = renderer.create(<SearchBox />).toJSON()
  expect(tree).toMatchSnapshot()
})
