import React from 'react'
import EstiloGlobal, { Container } from './styles'
import SideBar from './containers/SideBar'
import ListaDeContatos from './containers/ListaDeContatos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
