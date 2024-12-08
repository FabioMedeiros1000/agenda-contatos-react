import { Provider } from 'react-redux'

import Sidebar from './containers/Sidebar'
import ContactsList from './containers/ContactsList'
import HamburgerMenu from './components/HamburgerMenu'

import store from './store'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <HamburgerMenu />
        <ContactsList />
      </Container>
    </Provider>
  )
}

export default App
