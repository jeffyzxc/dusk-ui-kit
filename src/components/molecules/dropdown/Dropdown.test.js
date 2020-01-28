import React from 'react'
import renderer from 'react-test-renderer'
// import jest from 'jest'

import Dropdown from './Dropdown'

// jest.mock('uuid', () => ({
//   v4: jest.fn(() => 1),
// }))

// it('renders Dropdown', () => {
//   const tree = renderer.create(<Dropdown>Smoke Test</Dropdown>).toJSON()
//   expect(tree).toMatchSnapshot()
// })

it('renders Dropdown with any uuid number', () => {
  const tree = renderer.create(<Dropdown>Smoke Test</Dropdown>).toJSON()
  expect(tree).toMatchSnapshot()
})
