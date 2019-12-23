import React from 'react'
// import { action } from '@storybook/addon-actions'

import Footer from './Footer'
import readme from './readme.md'

const year = new Date().getFullYear()

export default {
  title: 'Atomic Components/Organisms/Footer',
  component: Footer,
  parameters: {
    notes: readme,
    jest: ['Footer.test.js'],
  },
}

export const footers = () => (
  <>
    <Footer className="p-3 mb-3" variant="primary">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
    <Footer className="p-3 mb-3" variant="secondary">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
    <Footer className="p-3 mb-3" variant="info">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
    <Footer className="p-3 mb-3" variant="success">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
    <Footer className="p-3 mb-3" variant="warning">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
    <Footer className="p-3 mb-3" variant="danger">
      <p className="m-0 text-right">&copy; {year} Dusk Network</p>
    </Footer>
  </>
)
