import React from 'react'
// import { action } from '@storybook/addon-actions'

import Navbar from '../../molecules/navbar'

import Header from './Header'
import readme from './readme.md'

export default {
  title: 'Atomic Components/Organisms/Header',
  component: Header,
  parameters: {
    notes: readme,
    jest: ['Header.test.js'],
  },
}

export const header = () => (
  <>
    <Header className="mb-3" variant="primary">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
    <Header className="mb-3" variant="secondary">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
    <Header className="mb-3" variant="info">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
    <Header className="mb-3" variant="success">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
    <Header className="mb-3" variant="warning">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
    <Header className="mb-3" variant="danger">
      <Navbar>
        <Navbar.Item>Item 1</Navbar.Item>
        <Navbar.Item>Item 2</Navbar.Item>
        <Navbar.Item>Item 3</Navbar.Item>
      </Navbar>
    </Header>
  </>
)
