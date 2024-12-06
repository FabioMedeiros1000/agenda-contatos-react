import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Card = styled.div`
  padding: 16px;
  background-color: ${variaveis.branco};
  border-radius: 16px;
  position: relative;

  @media (max-width: ${breakpoints.pc}) {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px;
    border-radius: 16px;
  }
`

export const Email = styled.input`
  font-size: 22px;
  color: ${variaveis.preto};
  margin-bottom: 8px;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    margin-bottom: 0;
    padding: 0 4px;
  }
`

export const Telefone = styled.input`
  font-size: 22px;
  color: ${variaveis.preto};
  margin-bottom: 8px;
  display: block;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 0 4px;
  }
`

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 20px;
    height: 20px;
    top: 8px;
    right: 8px;
  }
`

const Botao = styled.button`
  font-size: 22px;
  color: ${variaveis.branco};
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
  width: 90%;
  padding: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
    margin-bottom: 16px;
    padding: 0 4px;
  }
`
