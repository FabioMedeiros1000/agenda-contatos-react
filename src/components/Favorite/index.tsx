import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { setIsFavorite } from '../../store/reducers/contacts'

import variables from '../../styles/variables'

type Props = {
  id: number
}

const Favorite = ({ id }: Props) => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.contacts)

  const isFavoriteInRedux = items.find((item) => item.id === id)?.isFavorite

  const toggleFavorite = () => {
    dispatch(setIsFavorite({ id, value: !isFavoriteInRedux }))
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={isFavoriteInRedux ? variables.yellow : 'none'}
      stroke={variables.black}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={toggleFavorite}
      style={{ cursor: 'pointer' }}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default Favorite
