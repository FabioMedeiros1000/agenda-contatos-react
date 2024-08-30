import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { Botao } from './styles'

const BotaoAdicionar = () => {
  const dispatch = useDispatch()
  return (
    <Botao
      onClick={() => {
        dispatch(
          cadastrar({ nome: 'Nome', email: 'Email', telefone: 'Telefone' })
        )
      }}
    >
      +
    </Botao>
  )
}

export default BotaoAdicionar
