import { Botao } from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import { ContatoProps } from '../Contato'

const contatos: ContatoProps = {
  id: 20,
  nome: 'Digite o nome aqui',
  email: 'Digite o email aqui',
  telefone: 'Digite o telefone aqui'
}

const BotaoAdicionar = () => {
  const dispatch = useDispatch()

  return (
    <Botao
      onClick={() => {
        dispatch(cadastrar(contatos))
      }}
    >
      +
    </Botao>
  )
}

export default BotaoAdicionar
