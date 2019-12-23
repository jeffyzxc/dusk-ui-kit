import React from 'react'
// import { action } from '@storybook/addon-actions'

import Logo, { LogoSizes } from './Logo'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Logo',
  component: Logo,
  parameters: {
    notes: readme,
    jest: ['Logo.test.js'],
  },
}

export const logo = () => (
  <>
    <Logo />
  </>
)

export const sizes = () => (
  <>
    {Object.values(LogoSizes).map(size => (
      <div>
        <Logo className="m-3" title={size} size={size} />
      </div>
    ))}
  </>
)
