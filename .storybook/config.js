import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import duskTheme from './themes/dusk/'
import { withTests } from '@storybook/addon-jest'
import { withA11y } from '@storybook/addon-a11y';

import '../src/styles/index.scss'
import colors from '../src/styles/theme/dusk/export/colors.scss'
import results from '../.jest-test-results.json'

addDecorator(
  withTests({
    results,
  })
)

addDecorator(story => (
  <>
    <div style={{ padding: '40px 40px' }}>
      {story()}
    </div>
  </>
))

addDecorator(withA11y)

let backgrounds = []
for (const [key, value, index] of Object.entries(colors)) {
  const background = { name: key, value: value, default: key === 'light'}
  backgrounds.push(background)
}

addParameters({
  options: {
    showRoots: false,
    theme: duskTheme
  },
  backgrounds: backgrounds,
})

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.js$/)
  ],
  module
)
