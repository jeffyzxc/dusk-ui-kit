import React from 'react'
// import { action } from '@storybook/addon-actions'

import Title from './Title'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Title',
  component: Title,
  parameters: {
    notes: readme,
    jest: ['Title.test.js'],
  },
}

export const title = () => (
  <>
    <Title>Dusk Network Title Component</Title>
  </>
)
