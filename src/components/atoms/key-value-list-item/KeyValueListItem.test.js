import React from 'react'
import renderer from 'react-test-renderer'

import KeyValueListItem from './'

it('test to see if the KeyValueListItem renders correctly', () => {
  const tree = renderer.create(<KeyValueListItem>Smoke Test</KeyValueListItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
