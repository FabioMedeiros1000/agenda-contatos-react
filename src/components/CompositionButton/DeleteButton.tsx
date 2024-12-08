import { useDispatch } from 'react-redux'

import { remove } from '../../store/reducers/contacts'

import { Delete } from './styles'

type Props = {
  id: number
}

const DeleteButton = ({ id }: Props) => {
  const dispatch = useDispatch()

  return <Delete onClick={() => dispatch(remove(id))}>Excluir</Delete>
}

export default DeleteButton
