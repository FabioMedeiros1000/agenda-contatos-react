import { useDispatch } from 'react-redux'
import { Excluir } from './styles'

import { remover } from '../../store/reducers/contatos'

type Props = {
  id: number
}

const BotaoExcluir = ({ id }: Props) => {
  const dispatch = useDispatch()

  return <Excluir onClick={() => dispatch(remover(id))}>Excluir</Excluir>
}

export default BotaoExcluir
