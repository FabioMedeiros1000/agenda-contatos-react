import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${variaveis.preto};
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Campo = styled.input`
  color: ${variaveis.cinza};
  font-size: 22px;
  font-weight: 300px;
  border: none;
  width: 100%;
  border-bottom: 1px solid ${variaveis.preto};
  background-color: transparent;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const Container = styled.div`
  padding-top: 72px;
  padding-right: 40px;
  padding-left: 40px;
  background-color: ${variaveis.brancoEscuro};
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 12px 0px 12px;
  }
`
