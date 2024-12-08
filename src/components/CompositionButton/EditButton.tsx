import { useDispatch } from 'react-redux'

import { setisEditing } from '../../store/reducers/contacts'

import { Editar } from './styles'

type Props = {
  id: number
}

const EditButton = ({ id }: Props) => {
  const dispatch = useDispatch()

  const handleEditar = () => {
    dispatch(setisEditing({ id, value: true }))
  }

  return <Editar onClick={handleEditar}>Editar</Editar>
}

export default EditButton
