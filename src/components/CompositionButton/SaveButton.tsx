import { useDispatch } from 'react-redux'

import { edit } from '../../store/reducers/contacts'

import { Save } from './styles'

type Props = {
  name: string
  email: string
  phone: string
  id: number
  isFavorite: boolean
}

const SaveButton = ({ name, email, phone, id, isFavorite }: Props) => {
  const dispatch = useDispatch()

  const saveContact = () => {
    if (!name.trim()) {
      alert('Digite o nome do contato')
      return
    }

    if (!email.trim()) {
      alert('Digite o email do contato')
      return
    }

    if (!phone.trim()) {
      alert('Digite o telefone do contato')
      return
    }

    dispatch(
      edit({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        id,
        isEditing: false,
        isFavorite
      })
    )
  }

  return <Save onClick={saveContact}>Salvar</Save>
}

export default SaveButton
