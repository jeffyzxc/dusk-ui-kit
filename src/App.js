/* @flow */
import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Button from './components/atoms/button'
import Subtitle from './components/atoms/subtitle'
import Title from './components/atoms/title'
import Card from './components/atoms/card'
import NavbarItem from './components/atoms/navbar-item'
import SearchBox from './components/molecules/search-box'
import Feature from './components/organisms/feature'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import PagingTable from './components/organisms/paging-table'
// import view from './components/templates/default/style.scss'
import './styles/index.scss'

const year = new Date().getFullYear()

const data = [
  {
    id: 1,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 2,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 3,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 4,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 5,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 6,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 7,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 8,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 9,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 10,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 11,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 12,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 13,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 14,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 15,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 16,
    name: 'Dusk Chicken',
    price: '$1000',
  },
  {
    id: 17,
    name: 'Dusk Chicken',
    price: '$1000',
  },
]
const columns = [
  {
    dataField: 'id',
    text: 'Product ID',
  },
  {
    dataField: 'name',
    text: 'Product Name',
  },
  {
    dataField: 'price',
    text: 'Product Price',
  },
]

const App = (): React.Element<*> => {
  return (
    <>
      <Header title="UI Kit Demo Page">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Testing</NavbarItem>
      </Header>
      <section className="bg-dark py-3">
        <Container>
          <SearchBox className="mx-auto" />
        </Container>
      </section>
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
            <Card>
              <PagingTable data={data} columns={columns} />
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer>
        <p className="text-center mb-0">
          <small>&copy; {year} Dusk Network</small>
        </p>
      </Footer>
    </>
  )
}

export default App
