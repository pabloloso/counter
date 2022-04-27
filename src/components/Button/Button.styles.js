import styled from 'styled-components'

export const StyledButton = styled.button`
  color: white;
  font-size: 14px;
  padding: 14px 24px;
  border-radius: 8px;
  border: 0;
  transition: 0.2s;

  &:hover {
    background-color: #E61E4D;
  }

  background-color: ${props => props.buttonType === 'primary' ? '#FF385C' : 'white'};
`
