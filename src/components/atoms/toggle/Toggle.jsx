/* @flow */
import * as React from 'react'
import ReactToggle from 'react-toggle'

import './Toggle.scss'

export const ToggleVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
}

type Props = {
  className: string,
  value: string,
  onChange: Function,
  variant: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger',
  disabled: boolean,
  ariaLabel?: string,
  name?: string,
  id?: string,
  defaultChecked?: boolean,
}

const Toggle = (props: Props): React.Element<*> => {
  const {
    className,
    value,
    onChange,
    variant,
    disabled,
    ariaLabel,
    name,
    id,
    defaultChecked,
  } = props
  let updatedClassName = `__duk-button-toggle ${className}`
  if (variant) updatedClassName += `__duk-button-toggle--${variant}`
  return (
    <ReactToggle
      className={updatedClassName}
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
      name={name}
      id={id}
      defaultChecked={defaultChecked}
      disabled={disabled}
      icons={false}
    />
  )
}

Toggle.defaultProps = {
  className: '',
  variant: ToggleVariants.PRIMARY,
  onToggle: () => {},
  disabled: false,
  ariaLabel: '',
  name: '',
  id: '',
  value: '',
  defaultChecked: false,
}

export default Toggle
