import React from 'react'
// import { action } from '@storybook/addon-actions'
import { withXD } from 'storybook-addon-xd-designs'

import Button, { ButtonSizes } from './Button'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Button',
  component: Button,
  parameters: {
    notes: readme,
    jest: ['Button.test.js'],
    design: {
      specUrl: 'https://xd.adobe.com/view/6a614591-65fa-43b2-41e2-d6d00994e9d9-1c50/',
      reviewUrl: 'https://xd.adobe.com/view/b4a77e26-1ac6-403e-6d18-fe1b23a81f55-c296/',
    },
  },
  decorators: [withXD],
}

export const buttons = () => (
  <>
    <Button className="mr-3" variant="primary">
      Primary
    </Button>
    <Button className="mr-3" variant="secondary">
      Secondary
    </Button>
    <Button className="mr-3" variant="info">
      Info
    </Button>
    <Button className="mr-3" variant="success">
      Success
    </Button>
    <Button className="mr-3" variant="warning">
      Warning
    </Button>
    <Button className="mr-3" variant="danger">
      Danger
    </Button>
  </>
)

export const sizes = () => (
  <>
    <Button className="mr-3">Default</Button>
    <Button className="mr-3" size={ButtonSizes.SMALL}>
      Small
    </Button>
    <Button className="mr-3" size={ButtonSizes.LARGE}>
      Large
    </Button>
  </>
)

export const disabled = () => (
  <>
    <Button className="mr-3" variant="primary" disabled>
      Primary
    </Button>
    <Button className="mr-3" variant="secondary" disabled>
      Secondary
    </Button>
    <Button className="mr-3" variant="info" disabled>
      Info
    </Button>
    <Button className="mr-3" variant="success" disabled>
      Success
    </Button>
    <Button className="mr-3" variant="warning" disabled>
      Warning
    </Button>
    <Button className="mr-3" variant="danger" disabled>
      Danger
    </Button>
  </>
)
