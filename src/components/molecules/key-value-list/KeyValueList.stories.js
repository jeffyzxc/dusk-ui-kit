import React from 'react'
// import { action } from '@storybook/addon-actions'

import KeyValueList from './KeyValueList'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Molecules/KeyValueList',
  component: KeyValueList,
  parameters: {
    notes: readme,
    jest: ['KeyValueList.test.js'],
  },
}

export const keyValueList = () => (
  <>
    <KeyValueList>
      <KeyValueList.Item keyTitle="Key 1" keyValue="Value 1" />
      <KeyValueList.Item keyTitle="Key 2" keyValue="Value 2" />
      <KeyValueList.Item keyTitle="Key 3" keyValue="Value 3" />
    </KeyValueList>
  </>
)
