import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

export const Label = styled.label`
  color: ${variaveis.preto};
  font-weight: bold;
  font-size: 18px;
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
`
