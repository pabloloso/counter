import React from 'react'
import PropTypes from 'prop-types'

import { StyledButton } from './Button.styles'

const Button = ({ label, onClick, isPrimaryButton = true }) => {
  return (
    <StyledButton isPrimaryButton={isPrimaryButton} onClick={onClick}>
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isPrimaryButton: PropTypes.bool
}

export default Button
