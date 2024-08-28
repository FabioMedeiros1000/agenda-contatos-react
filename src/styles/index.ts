import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

type Props = {
  color: string
  bold: boolean
  size: number
}

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
`

export const P = styled.p<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  margin-bottom: 24px;
  font-weight: ${(props) => (props.bold ? '700' : '400')};
`

export default EstiloGlobal
