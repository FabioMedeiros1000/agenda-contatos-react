import { useDispatch, useSelector } from 'react-redux'
import { Salvar } from './styles'
import { editar, setEstaEditando } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

type BotaoSalvarProps = {
  nome: string
  email: string
  telefone: string
  id: number
}

const BotaoSalvar = ({ nome, email, telefone, id }: BotaoSalvarProps) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const salvarContato = () => {
    if (!nome.trim()) {
      alert('Digite o nome do contato')
      return
    }

    // Atualiza o contato na store
    dispatch(
      editar({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
        id,
        estaEditando: false
      })
    )

    // Define `estaEditando` como falso para o contato atual
    dispatch(setEstaEditando({ id, value: false }))
  }

  return <Salvar onClick={salvarContato}>Salvar</Salvar>
}

export default BotaoSalvar
