import { useDispatch } from 'react-redux'
import { Editar } from './styles'
import { setEstaEditando } from '../../store/reducers/contatos'

type Props = {
  id: number
}

const BotaoEditar = ({ id }: Props) => {
  const dispatch = useDispatch()

  const handleEditar = () => {
    dispatch(setEstaEditando({ id, value: true }))
  }

  return <Editar onClick={handleEditar}>Editar</Editar>
}

export default BotaoEditar
