import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: ${variables.green};
  font-size: 65px;
  color: ${variables.white};
  padding: 12px 35px;
  cursor: pointer;
  position: fixed;
  right: 45px;
  bottom: 10px;

  @media (max-width: ${breakpoints.pc}) {
    position: fixed;
    right: 25px;
    bottom: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
    padding: 12px 22px;
    right: 25px;
    bottom: 15px;
  }
`
