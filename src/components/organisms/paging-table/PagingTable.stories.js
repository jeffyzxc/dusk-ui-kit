import React from 'react'

import PagingTable from './PagingTable'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Organisms/PagingTable',
  component: PagingTable,
  parameters: {
    notes: readme,
    jest: ['PagingTable.test.js'],
  },
}

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

export const header = () => (
  <>
    <PagingTable data={data} columns={columns} />
  </>
)
