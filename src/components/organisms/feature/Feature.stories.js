import React from 'react'
// import { action } from '@storybook/addon-actions'

import Title from '../../atoms/title'
import Card from '../../atoms/card'
import Button, { ButtonSizes } from '../../atoms/button/Button'

import Feature from './Feature'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Organisms/Feature',
  component: Feature,
  parameters: {
    notes: readme,
    jest: ['Feature.test.js'],
  },
}

export const feature = () => (
  <>
    <Feature>
      <Card>
        <Title>Feature Title</Title>
        <p className="lead">
          An atom is the smallest constituent unit of ordinary matter that has the properties of a
          chemical element.
        </p>
        <p>
          Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are
          very small; typical sizes are around 100 picometers (a ten-billionth of a meter, in the
          short scale).
        </p>
        <Button className="my-3 mx-2" size={ButtonSizes.LARGE}>
          Feature Action!
        </Button>
      </Card>
    </Feature>
  </>
)
