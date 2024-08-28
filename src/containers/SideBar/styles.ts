import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${variaveis.preto};
  margin-bottom: 24px;
`

export const Campo = styled.input`
  color: ${variaveis.cinza};
  font-size: 22px;
  font-weight: 300px;
  border: none;
  width: 100%;
  border-bottom: 1px solid ${variaveis.preto};
  background-color: transparent;
`

export const Container = styled.div`
  padding-top: 72px;
  padding-right: 40px;
  padding-left: 40px;
  background-color: ${variaveis.brancoEscuro};
  height: 100vh;
`
