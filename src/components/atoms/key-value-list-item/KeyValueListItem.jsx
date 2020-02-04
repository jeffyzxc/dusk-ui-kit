/* @flow */
import * as React from 'react'

type Props = {
  keyTitleClass?: string,
  keyValueClass?: string,
  keyTitle: string,
  keyValue: string,
}

const KeyValueListItem = (props: Props): React.Element<*> => {
  const { keyTitle, keyValue, keyTitleClass, keyValueClass } = props
  return (
    <>
      <dt
        className={keyTitleClass}
        style={{
          fontWeight: 400,
          paddingLeft: 0,
        }}
      >
        {keyTitle}
      </dt>
      <dd
        className={keyValueClass}
        style={{
          textAlign: 'right',
          fontWeight: 500,
          paddingRight: 0,
        }}
      >
        {keyValue}
      </dd>
    </>
  )
}

KeyValueListItem.defaultProps = {
  keyTitleClass: 'col-6',
  keyValueClass: 'col-6',
  keyTitle: '',
  keyValue: '',
}

export default KeyValueListItem
