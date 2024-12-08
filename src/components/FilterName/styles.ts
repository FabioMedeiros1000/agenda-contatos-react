import styled from 'styled-components'
import variables from '../../styles/variables'

export const Label = styled.label`
  color: ${variables.black};
  font-weight: bold;
  font-size: 18px;
`

export const Input = styled.input`
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 24px;
  background-color: ${variables.white};
  border: 2px solid ${variables.black};
  font-size: 16px;
  width: 100%;
  color: ${variables.black};

  &::placeholder {
    color: ${variables.gray};
  }
`
