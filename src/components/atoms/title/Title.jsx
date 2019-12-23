/* @flow */
import * as React from 'react'

type Props = {
  className: string,
  children: React.Node,
}

const Title = (props: Props): React.Element<*> => {
  const { className, children } = props
  const updatedClassName = `__duk-subtitle ${className}`
  return <h3 className={updatedClassName}>{children}</h3>
}

Title.defaultProps = {
  className: '',
}

export default Title
