/* @flow */
import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Button from './components/atoms/button'
import Subtitle from './components/atoms/subtitle'
import Title from './components/atoms/title'
import Card from './components/atoms/card'
import NavbarItem from './components/atoms/navbar-item'
import Feature from './components/organisms/feature'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
// import view from './components/templates/default/style.scss'
import './styles/index.scss'

const year = new Date().getFullYear()

const App = (): React.Element<*> => {
  return (
    <div>
      <Header title="UI Kit Demo Page">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Testing</NavbarItem>
      </Header>
      <Feature className="rounded-0">
        <Card>
          <Title>Atoms</Title>
          <p>blah</p>
        </Card>
      </Feature>
      <Container fluid>
        <Row>
          <Col xs="3">
            <Card>
              <Subtitle>Atoms in philosophy</Subtitle>
              <p>Blah</p>
            </Card>
          </Col>
          <Col>
            <Card>
              <Subtitle>First evidence-based theory</Subtitle>
              <p>Blah</p>
              <Button>Testing</Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <p className="text-center mb-0">
          <small>&copy; {year} Dusk Network</small>
        </p>
      </Footer>
    </div>
  )
}

export default App
