import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Botao = styled.button`
  border-radius: 50%;
  border: none;
  background-color: ${variaveis.verde};
  font-size: 65px;
  color: ${variaveis.branco};
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
