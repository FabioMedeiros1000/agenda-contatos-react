import React from 'react'
import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import SideBar from './containers/SideBar'
import ListaDeContatos from './containers/ListaDeContatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
