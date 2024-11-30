import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

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

export const Salvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const Cancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`

export const Editar = styled(Botao)`
  background-color: ${variaveis.cinza};
`

export const Excluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
  margin-left: 8px;
`
