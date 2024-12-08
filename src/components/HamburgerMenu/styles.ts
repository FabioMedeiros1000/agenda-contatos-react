import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

export const Container = styled.div`
  display: none;

  @media (max-width: ${breakpoints.pc}) {
    display: block;
    background-color: ${variables.white};
    padding: 8px;
    width: 100%;

    .center {
      display: flex;
      justify-content: center;
    }
  }
`

export const HamburgerContent = styled.div`
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
  transition: all 0.5s ease;

  &.is-open {
    opacity: 1;
    margin-top: 8px;
    padding: 8px;
    max-height: 300px;
    transform: translateY(0);

    .divideInCols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 24px;
      align-items: center;
    }
  }
`
