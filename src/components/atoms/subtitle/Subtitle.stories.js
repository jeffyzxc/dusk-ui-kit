import React from 'react'
// import { action } from '@storybook/addon-actions'

import Subtitle from './Subtitle'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Subtitle',
  component: Subtitle,
  parameters: {
    notes: readme,
    jest: ['Subtitle.test.js'],
  },
}

export const subtitle = () => (
  <>
    <Subtitle>Dusk Network Subtitle Component</Subtitle>
  </>
)
