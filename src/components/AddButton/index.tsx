import { useDispatch, useSelector } from 'react-redux'

import { register, toggleShowFavorites } from '../../store/reducers/contacts'
import { RootReducer } from '../../store'

import { Button } from './styles'

const AddButton = () => {
  const dispatch = useDispatch()
  const { showFavorites } = useSelector((state: RootReducer) => state.contacts)

  const registerContact = () => {
    if (showFavorites) {
      dispatch(toggleShowFavorites())
    }
    dispatch(register({ name: '', email: '', phone: '', isFavorite: false }))
  }

  return <Button onClick={registerContact}>+</Button>
}

export default AddButton
