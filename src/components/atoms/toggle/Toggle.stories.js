import React from 'react'
// import { action } from '@storybook/addon-actions'

import Toggle from './Toggle'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Toggle',
  component: Toggle,
  parameters: {
    notes: readme,
    jest: ['Toggle.test.js'],
  },
}

export const toggleButtons = () => (
  <>
    <label htmlFor="_primary" className="d-block">
      <Toggle id="_primary" variant="primary" /> Primary
    </label>
    <label htmlFor="_secondary" className="d-block">
      <Toggle id="_secondary" variant="secondary" /> Secondary
    </label>
    <label htmlFor="_info" className="d-block">
      <Toggle id="_info" variant="info" /> Info
    </label>
    <label htmlFor="_success" className="d-block">
      <Toggle id="_success" variant="success" /> Success
    </label>
    <label htmlFor="_warning" className="d-block">
      <Toggle id="_warning" variant="warning" /> Warning
    </label>
    <label htmlFor="_danger" className="d-block">
      <Toggle id="_danger" variant="danger" /> Danger
    </label>
  </>
)

export const disabled = () => (
  <>
    <label htmlFor="_primary" className="d-block">
      <Toggle id="_primary" variant="primary" disabled /> Primary
    </label>
    <label htmlFor="_secondary" className="d-block">
      <Toggle id="_secondary" variant="secondary" disabled /> Secondary
    </label>
    <label htmlFor="_info" className="d-block">
      <Toggle id="_info" variant="info" disabled /> Info
    </label>
    <label htmlFor="_success" className="d-block">
      <Toggle id="_success" variant="success" disabled /> Success
    </label>
    <label htmlFor="_warning" className="d-block">
      <Toggle id="_warning" variant="warning" disabled /> Warning
    </label>
    <label htmlFor="_danger" className="d-block">
      <Toggle id="_danger" variant="danger" disabled /> Danger
    </label>
  </>
)
