import React from 'react'
import renderer from 'react-test-renderer'

import KeyValueList from './KeyValueList'

it('test to see if the KeyValueList renders correctly', () => {
  const tree = renderer.create(<KeyValueList>Smoke Test</KeyValueList>).toJSON()
  expect(tree).toMatchSnapshot()
})
