/* @flow */
import * as React from 'react'

type Props = {
  className: string,
  children: React.Node,
}

const Subtitle = (props: Props): React.Element<*> => {
  const { className, children } = props
  const updatedClassName = `__duk-subtitle ${className}`
  return <h4 className={updatedClassName}>{children}</h4>
}

Subtitle.defaultProps = {
  className: '',
}

export default Subtitle
