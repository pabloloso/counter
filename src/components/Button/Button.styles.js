import styled, { css } from 'styled-components'

const primaryButton = css`
  background-color: #FF385C;
  color: white;
  border: 0;
  padding: 14px 24px;

  &:hover {
    background-color: #E61E4D;
  }
`

const secondaryButton = css`
  background-color: white;
  color: #FF385C;
  border: 2px solid #FF385C;
  padding: 12px 22px;

  &:hover {
    background-color: #FF385C;
    color: white;
  }
`

export const StyledButton = styled.button`
  font-size: 14px;
  border-radius: 8px;
  transition: 0.2s;

  ${props => props.isPrimaryButton ? primaryButton : secondaryButton};
`
