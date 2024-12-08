import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { toggleShowFavorites } from '../../store/reducers/contacts'

import { Container } from './styles'

const FilterCard = () => {
  const { showFavorites } = useSelector((state: RootReducer) => state.contacts)
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

export default FilterCard
