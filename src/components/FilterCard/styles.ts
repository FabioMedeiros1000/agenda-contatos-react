import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

type Props = {
  highlight: boolean
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.highlight ? variables.black : variables.white};
  color: ${(props) => (props.highlight ? variables.white : variables.black)};
  border: 2px solid ${variables.black};
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
