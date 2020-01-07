/* @flow */
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
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
        css={css`
          font-weight: 400;
        `}
      >
        {keyTitle}
      </dt>
      <dd
        className={keyValueClass}
        css={css`
          text-align: right;
          font-weight: 500;
        `}
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
