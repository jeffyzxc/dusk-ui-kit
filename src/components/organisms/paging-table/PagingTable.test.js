import React from 'react'
import renderer from 'react-test-renderer'

import PagingTable from './PagingTable'

const data = [
  {
    id: 1,
    name: 'Dusk Chicken',
    price: '$1000',
  },
]
const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
  },
]

it('test to see if the Header renders correctly', () => {
  const tree = renderer.create(<PagingTable data={data} columns={columns} />).toJSON()
  expect(tree).toMatchSnapshot()
})
