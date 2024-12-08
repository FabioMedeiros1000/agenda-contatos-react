import styled from 'styled-components'
import variables, { breakpoints } from '../../styles/variables'

export const Card = styled.div`
  padding: 16px;
  background-color: ${variables.white};
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

export const Name = styled.input`
  color: ${variables.black};
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

export const Email = styled.input`
  font-size: 22px;
  color: ${variables.black};
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

export const Phone = styled.input`
  font-size: 22px;
  color: ${variables.black};
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
