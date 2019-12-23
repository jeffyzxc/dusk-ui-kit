/* @flow */
import * as React from 'react'
import BootstrapCard from 'react-bootstrap/Card'

import './Card.scss'

export const CardVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
}

type Props = {
  className: string,
  title: string,
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger',
  children: React.Node,
}

const Card = (props: Props): React.Element<*> => {
  const { className, title, variant, children } = props
  let bg
  let border
  let text
  let headerClass = ''
  switch (variant) {
    case 'primary':
      bg = 'primary'
      border = 'primary'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'secondary':
      bg = 'secondary'
      border = 'secondary'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'info':
      bg = 'info'
      border = 'info'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'success':
      bg = 'success'
      border = 'success'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'warning':
      bg = 'warning'
      border = 'warning'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'danger':
      bg = 'danger'
      border = 'danger'
      text = 'white'
      headerClass = 'text-white'
      break
    case 'dark':
      bg = 'dark'
      border = 'dark'
      text = 'light'
      headerClass = 'text-light'
      break
    case 'light':
      bg = 'light'
      border = 'dark'
      text = 'dark'
      headerClass = 'text-dark'
      break
    default:
      bg = ''
      border = ''
      text = ''
      headerClass = ''
  }

  const updatedClassName = `__duk-card ${className}`

  return (
    <BootstrapCard className={updatedClassName} bg={bg} border={border} text={text}>
      <BootstrapCard.Body>
        {title !== '' && <BootstrapCard.Title className={headerClass}>{title}</BootstrapCard.Title>}
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}

Card.defaultProps = {
  className: '',
  title: '',
  variant: '',
}

export default Card
