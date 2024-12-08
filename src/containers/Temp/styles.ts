import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${variables.black};
  margin-bottom: 24px;
  display: block;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const Container = styled.div`
  padding: 40px;
  background-color: ${variables.white};
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`
