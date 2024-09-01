import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { Botao } from './styles'

export type BotaoAdicionarProps = {
  cadastrando: boolean
  onClickBotao: (value: boolean) => void
}

const BotaoAdicionar = ({ onClickBotao }: BotaoAdicionarProps) => {
  const dispatch = useDispatch()

  return (
    <Botao
      onClick={() => {
        onClickBotao(true)
        dispatch(cadastrar({ nome: '', email: '', telefone: '' }))
      }}
    >
      +
    </Botao>
  )
}

export default BotaoAdicionar
