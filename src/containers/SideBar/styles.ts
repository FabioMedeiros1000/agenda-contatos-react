import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${variaveis.preto};
  margin-bottom: 24px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const Label = styled.label`
  color: ${variaveis.preto};
  font-weight: bold;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const Campo = styled.input`
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 24px;
  background-color: ${variaveis.branco};
  border: 2px solid ${variaveis.preto};
  font-size: 16px;
  width: 100%;
  color: ${variaveis.preto};

  &::placeholder {
    color: ${variaveis.cinza};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }
`

export const Container = styled.div`
  padding: 40px;
  background-color: ${variaveis.branco};
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`
