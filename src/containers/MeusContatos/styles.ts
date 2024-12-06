import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Container = styled.div`
  padding: 40px;
  background-color: ${variaveis.preto};
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: ${breakpoints.pc}) {
    padding: 56px 15px 0 15px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 15px;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const Titulo = styled.h1`
  margin-bottom: 24px;
  color: ${variaveis.branco};
  font-size: 48px;
  font-weight: 700;
  display: block;

  @media (max-width: ${breakpoints.pc}) {
    font-size: 40px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const P = styled.p`
  color: ${variaveis.branco};
  font-size: 22px;

  display: block;
  width: 100%;

  @media (max-width: ${breakpoints.pc}) {
    text-align: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`
