import { useDispatch } from 'react-redux'

import { remove, setisEditing } from '../../store/reducers/contacts'

import { Cancel } from './styles'

type Props = {
  id: number
  name: string
  email: string
  phone: string
}

const BotaoCancelar = ({ id, name, email, phone }: Props) => {
  const dispatch = useDispatch()

  const handleCancelar = () => {
    if (!name.trim().length || !email.trim().length || !phone.trim().length)
      dispatch(remove(id))
    else dispatch(setisEditing({ id, value: false }))
  }

  return <Cancel onClick={handleCancelar}>Cancelar</Cancel>
}

export default BotaoCancelar
