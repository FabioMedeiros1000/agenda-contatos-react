import { useDispatch } from 'react-redux'
import { Cancelar } from './styles'
import { remover, setEstaEditando } from '../../store/reducers/contatos'

type Props = {
  id: number
  nome: string
  email: string
  telefone: string
}

const BotaoCancelar = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch()

  const handleCancelar = () => {
    if (!nome.trim().length || !email.trim().length || !telefone.trim().length)
      dispatch(remover(id))
    else dispatch(setEstaEditando({ id, value: false }))
  }

  return <Cancelar onClick={handleCancelar}>Cancelar</Cancelar>
}

export default BotaoCancelar
