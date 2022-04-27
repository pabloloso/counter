import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles'

const Button = ({ label, onClick, buttonType = 'primary' }) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonType: PropTypes.string
}

export default Button
