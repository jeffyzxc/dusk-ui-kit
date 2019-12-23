import React from 'react'
// import { action } from '@storybook/addon-actions'

import Card from './Card'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Atoms/Card',
  component: Card,
  parameters: {
    notes: readme,
    jest: ['Card.test.js'],
  },
}

export const cards = () => (
  <>
    <Card className="mb-3">
      <p>Default</p>
    </Card>
    <Card className="mb-3" variant="primary">
      <p>Primary</p>
    </Card>
    <Card className="mb-3" variant="secondary">
      <p>Secondary</p>
    </Card>
    <Card className="mb-3" variant="info">
      <p>Info</p>
    </Card>
    <Card className="mb-3" variant="success">
      <p>Success</p>
    </Card>
    <Card className="mb-3" variant="warning">
      <p>Warning</p>
    </Card>
    <Card className="mb-3" variant="danger">
      <p>Danger</p>
    </Card>
  </>
)

export const withTitles = () => (
  <>
    <Card className="mb-3" title="Card Title">
      <p>Default</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="primary">
      <p>Primary</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="secondary">
      <p>Secondary</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="info">
      <p>Info</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="success">
      <p>Success</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="warning">
      <p>Warning</p>
    </Card>
    <Card className="mb-3" title="Card Title" variant="danger">
      <p>Danger</p>
    </Card>
  </>
)
