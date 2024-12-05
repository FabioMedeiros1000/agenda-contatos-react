import { useDispatch } from 'react-redux'
import { Salvar } from './styles'
import { editar } from '../../store/reducers/contatos'

type Props = {
  nome: string
  email: string
  telefone: string
  id: number
}

const BotaoSalvar = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()

  const salvarContato = () => {
    if (!nome.trim()) {
      alert('Digite o nome do contato')
      return
    }

    if (!email.trim()) {
      alert('Digite o email do contato')
      return
    }

    if (!telefone.trim()) {
      alert('Digite o telefone do contato')
      return
    }

    dispatch(
      editar({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
        id,
        estaEditando: false
      })
    )
  }

  return <Salvar onClick={salvarContato}>Salvar</Salvar>
}

export default BotaoSalvar