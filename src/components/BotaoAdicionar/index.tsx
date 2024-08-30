import { Botao } from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'

import { ContatoProps } from '../../components/Contato'

const BotaoAdicionar = ({
  editando,
  setEditando
}: Omit<ContatoProps, 'nome' | 'email' | 'id' | 'telefone'>) => {
  const dispatch = useDispatch()
  // const { estaEditando, setEstaEditando } = useEditar()

  return (
    <Botao
      onClick={() => {
        dispatch(
          cadastrar({
            nome: 'Digite o nome',
            email: 'Digite o email',
            telefone: 'Digite o telefone'
          })
        )
        // setEstaEditando(true)
      }}
    >
      +
    </Botao>
  )
}

export default BotaoAdicionar
