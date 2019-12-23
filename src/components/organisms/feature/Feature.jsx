/* @flow */
import * as React from 'react'
import BootstrapJumbotron from 'react-bootstrap/Jumbotron'

import './Feature.scss'

type Props = {
  className: string,
  children: React.Node,
}

const Feature = (props: Props): React.Element<*> => {
  const { className, children } = props
  const updatedClassName = `__duk-feature ${className}`
  return <BootstrapJumbotron className={updatedClassName}>{children}</BootstrapJumbotron>
}

Feature.defaultProps = {
  className: '',
}

export default Feature
