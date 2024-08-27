import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const Card = styled.ul`
  padding: 16px;
  background-color: #f4f4dd;
  border-radius: 16px;
`

export const Nome = styled.li`
  color: #3d3d34;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const Email = styled.li`
  font-size: 22px;
  color: #3d3d34;
  margin-bottom: 8px;
`

export const Telefone = styled.li`
  font-size: 22px;
  color: #3d3d34;
  margin-bottom: 8px;
`

export const BotaoEditar = styled.div`
  font-size: 22px;
  color: #f4f4dd;
  padding: 16px 40px;
  background-color: #5d5c49;
  display: inline-block;
  border-radius: 12px;
  cursor: pointer;
`

export const BotaoExcluir = styled.div`
  font-size: 22px;
  color: #f4f4dd;
  padding: 16px 40px;
  background-color: #801245;
  display: inline-block;
  border-radius: 12px;
  margin-left: 8px;
  cursor: pointer;
`
