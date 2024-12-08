import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

const Button = styled.button`
  font-size: 22px;
  color: ${variables.white};
  padding: 16px 40px;
  display: inline-block;
  border-radius: 12px;
  cursor: pointer;
  border: none;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 8px;
  }
`

export const Save = styled(Button)`
  background-color: ${variables.green};
`

export const Cancel = styled(Button)`
  background-color: ${variables.red};
  margin-left: 8px;
`

export const Editar = styled(Button)`
  background-color: ${variables.gray};
`

export const Delete = styled(Button)`
  background-color: ${variables.red};
  margin-left: 8px;
`
