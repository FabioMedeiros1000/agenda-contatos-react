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

export const Card = styled.div`
  padding: 16px;
  background-color: ${variaveis.branco};
  border-radius: 16px;
`

export const Nome = styled.p`
  color: ${variaveis.preto};
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const Email = styled.input`
  font-size: 22px;
  color: ${variaveis.preto};
  margin-bottom: 8px;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
`

export const Telefone = styled.input`
  font-size: 22px;
  color: ${variaveis.preto};
  margin-bottom: 8px;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
`

export const BotaoEditar = styled.button`
  font-size: 22px;
  color: ${variaveis.branco};
  padding: 16px 40px;
  background-color: ${variaveis.cinza};
  display: inline-block;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`

export const BotaoExcluir = styled.button`
  font-size: 22px;
  color: ${variaveis.branco};
  padding: 16px 40px;
  background-color: ${variaveis.vermelho};
  display: inline-block;
  border-radius: 12px;
  margin-left: 8px;
  cursor: pointer;
  border: none;
`
