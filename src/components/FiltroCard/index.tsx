import { useDispatch, useSelector } from 'react-redux'
import { Container } from './styles'
import { RootReducer } from '../../store'
import { toggleShowFavorites } from '../../store/reducers/contatos'

const FiltroCard = () => {
  const { showFavorites } = useSelector((state: RootReducer) => state.contatos)
  const dispatch = useDispatch()

  return (
    <Container
      onClick={() => dispatch(toggleShowFavorites())}
      highlight={showFavorites}
    >
      Mostrar favoritos
    </Container>
  )
}

export default FiltroCard
