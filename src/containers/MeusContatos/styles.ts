import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.div`
  padding: 56px 96px 56px 32px;
  background-color: ${variaveis.preto};
  height: 100vh;
  overflow-y: scroll;
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
`

export const P = styled.p`
  color: ${variaveis.branco};
  font-size: 22px;
  margin-bottom: 24px;
`
