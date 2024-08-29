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

const Botao = styled.button`
  font-size: 22px;
  color: ${variaveis.branco};
  padding: 16px 40px;
  display: inline-block;
  border-radius: 12px;
  cursor: pointer;
  border: none;
`

export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.cinza};
`

export const BotaoExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`

export const Name = styled.input`
  color: ${variaveis.preto};
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: 700;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
`
