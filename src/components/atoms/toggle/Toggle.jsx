/* @flow */
/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import * as React from 'react'
import ReactToggle from 'react-toggle'

import colors from '../../../styles/theme/dusk/export/colors.scss'

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
    <>
      <Global
        styles={{
          '.react-toggle': {
            touchAction: 'pan-x',
            display: 'inline-block',
            position: 'relative',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            padding: 0,
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          },
          '.react-toggle-screenreader-only': {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            width: 1,
          },
          '.react-toggle--disabled': {
            cursor: 'not-allowed',
            opacity: '0.5',
            WebkitTransition: 'opacity 0.25s',
            transition: 'opacity 0.25s',
          },
          '.react-toggle-track': {
            width: 50,
            height: 24,
            padding: 0,
            borderRadius: 30,
            backgroundColor: colors.white,
            WebkitTransition: 'all 0.2s ease',
            MozTransition: 'all 0.2s ease',
            transition: 'all 0.2s ease',
          },
          '.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track': {
            backgroundColor: colors.white,
          },
          '.react-toggle--checked .react-toggle-track': {
            backgroundColor: colors.white,
          },
          '.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track': {
            backgroundColor: colors.white,
          },
          '.react-toggle-track-check': {
            position: 'absolute',
            width: 14,
            height: 10,
            top: 0,
            bottom: 0,
            marginTop: 'auto',
            marginBottom: 'auto',
            lineHeight: 0,
            left: 8,
            opacity: 0,
            WebkitTransition: 'opacity 0.25s ease',
            MozTransition: 'opacity 0.25s ease',
            transition: 'opacity 0.25s ease',
          },
          '.react-toggle--checked .react-toggle-track-check': {
            opacity: 1,
            WebkitTransition: 'opacity 0.25s ease',
            MozTransition: 'opacity 0.25s ease',
            transition: 'opacity 0.25s ease',
          },
          '.react-toggle-track-x': {
            position: 'absolute',
            width: 10,
            height: 10,
            top: 0,
            bottom: 0,
            marginTop: 'auto',
            marginBottom: 'auto',
            lineHeight: 0,
            right: 10,
            opacity: 1,
            WebkitTransition: 'opacity 0.25s ease',
            MozTransition: 'opacity 0.25s ease',
            transition: 'opacity 0.25s ease',
          },
          '.react-toggle--checked .react-toggle-track-x': {
            opacity: 0,
          },
          '.react-toggle-thumb': {
            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            position: 'absolute',
            top: 1,
            left: 1,
            width: 22,
            height: 22,
            border: '1px solid colors.dark',
            borderRadius: '50%',
            backgroundColor: colors.dark,
            WebkitBoxSizing: 'border-box',
            MozBoxSizing: 'border-box',
            boxSizing: 'border-box',
            WebkitTransition: 'all 0.25s ease',
            MozTransition: 'all 0.25s ease',
          },
          '.react-toggle--checked .react-toggle-thumb': {
            left: 27,
            borderColor: colors.primary,
            backgroundColor: colors.primary,
          },
          '.react-toggle--focus .react-toggle-thumb': {
            WebkitBoxShadow: '0px 0px 3px 2px #0099E0',
            MozBoxShadow: '0px 0px 3px 2px #0099E0',
            boxShadow: '0px 0px 2px 3px #0099E0',
          },
          '.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb': {
            WebkitBoxShadow: '0px 0px 5px 5px #0099E0',
            MozBoxShadow: '0px 0px 5px 5px #0099E0',
            boxShadow: '0px 0px 5px 5px #0099E0',
          },
          '.__duk-button-toggle--primary.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.primary,
            borderColor: colors.primary,
          },
          '.__duk-button-toggle--secondary.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.secondary,
            borderColor: colors.secondary,
          },
          '.__duk-button-toggle--info.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.info,
            borderColor: colors.info,
          },
          '.__duk-button-toggle--success.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.success,
            borderColor: colors.success,
          },
          '.__duk-button-toggle--warning.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.warning,
            borderColor: colors.warning,
          },
          '.__duk-button-toggle--danger.react-toggle--checked .react-toggle-thumb': {
            backgroundColor: colors.danger,
            borderColor: colors.danger,
          },
        }}
      />
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
    </>
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
