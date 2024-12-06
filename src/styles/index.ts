import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './variaveis'
import { Container as Aside } from '../containers/SideBar/styles'

const EstiloGlobal = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 256px auto;

  @media (max-width: ${breakpoints.pc}) {
    display: block;

    ${Aside} {
      display: none;
    }
  }
`

export default EstiloGlobal
