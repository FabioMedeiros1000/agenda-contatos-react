import { useDispatch } from 'react-redux'
import { Container, Campo, Titulo } from './styles'
import { alterarTermo } from '../../store/reducers/filtro'

const SideBar = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <Titulo>Pesquise o nome</Titulo>
      <Campo
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        placeholder="Nome"
      />
    </Container>
  )
}

export default SideBar
