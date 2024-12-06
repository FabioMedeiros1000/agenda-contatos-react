import styled from 'styled-components'
import variaveis, { breakpoints } from '../../styles/variaveis'

type Props = {
  highlight: boolean
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.highlight ? variaveis.preto : variaveis.branco};
  color: ${(props) => (props.highlight ? variaveis.branco : variaveis.preto)};
  border: 2px solid ${variaveis.preto};
  border-radius: 10px;
  height: 72px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    height: 45px;
  }
`
