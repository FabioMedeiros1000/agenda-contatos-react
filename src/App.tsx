import React from 'react'
import { Provider } from 'react-redux'

import EstiloGlobal, { Container } from './styles'
import SideBar from './containers/SideBar'
import MeusContatos from './containers/MeusContatos'
import store from './store'
import HamburgerMenu from './components/HamburgerMenu'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <HamburgerMenu />
        <MeusContatos />
      </Container>
    </Provider>
  )
}

export default App
