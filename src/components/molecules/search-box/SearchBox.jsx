/* @flow */
import * as React from 'react'
import BootstrapForm from 'react-bootstrap/Form'
import BootstrapInputGroup from 'react-bootstrap/InputGroup'
import BootstrapFormControl from 'react-bootstrap/FormControl'
import BootstrapButton from 'react-bootstrap/Button'

import MagnifierSvg from './SearchBox.svg'

type Props = {
  className: string,
  placeholder: string,
  onSubmit: Function,
  onChange: Function,
}

const SearchBox = (props: Props): React.Element<*> => {
  const { className, placeholder, onSubmit, onChange } = props
  const updatedClassName = `__duk-search-box ${className}`
  return (
    <BootstrapForm inline onSubmit={onSubmit} className={updatedClassName}>
      <BootstrapInputGroup className="w-100">
        <BootstrapFormControl onChange={onChange} type="search" placeholder={placeholder} />
        <BootstrapInputGroup.Append>
          <BootstrapButton type="submit" variant="primary">
            <MagnifierSvg width="20" height="20" />
          </BootstrapButton>
        </BootstrapInputGroup.Append>
      </BootstrapInputGroup>
    </BootstrapForm>
  )
}

SearchBox.defaultProps = {
  className: '',
  placeholder: 'Search',
  onSubmit: () => {},
  onChange: () => {},
}

export default SearchBox
