/* @flow */
import * as React from 'react'
import BootstrapButton from 'react-bootstrap/Button'

export const ButtonTypes = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  LIGHT: 'light',
  DARK: 'dark',
  OUTLINE_SUCCESS: 'outline-success',
  OUTLINE_WARNING: 'outline-warning',
  OUTLINE_DANGER: 'outline-danger',
  OUTLINE_LIGHT: 'outline-light',
  OUTLINE_DARK: 'outline-dark',
}

export const ButtonSizes = {
  SMALL: 'sm',
  LARGE: 'lg',
}

type Props = {
  className: string,
  type: 'button' | 'reset' | 'submit',
  variant?: 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-info'
    | 'outline-success'
    | 'outline-warning'
    | 'outline-danger'
    | 'outline-light'
    | 'outline-dark',
  size?: 'small' | 'large',
  onClick: Function,
  children: React.Node,
  disabled?: boolean,
}

const Button = (props: Props): React.Element<*> => {
  const { className, type, onClick, children, variant, size, disabled } = props
  const updatedClassName = `__duk-button ${className}`
  return (
    <BootstrapButton
      className={updatedClassName}
      type={type}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
    >
      {children}
    </BootstrapButton>
  )
}

Button.defaultProps = {
  type: ButtonTypes.BUTTON,
  variant: ButtonVariants.PRIMARY,
  size: '',
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button
