/* @flow */
import * as React from 'react'

import KeyValueListItem from '../../atoms/key-value-list-item'

type Props = {
  children: React.Node,
  className: string,
}

const KeyValueList = (props: Props): React.Element<*> => {
  const { children, className } = props
  const updatedClassName = `__duk-key-value-list row ${className}`
  return <dl className={updatedClassName}>{children}</dl>
}

KeyValueList.defaultProps = {
  className: '',
}

KeyValueList.Item = KeyValueListItem

export default KeyValueList
