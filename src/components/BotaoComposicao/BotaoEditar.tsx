import { useDispatch } from 'react-redux'
import { Editar } from './styles'

type BotaoEditarProps = {
  onClick: () => void
}

const BotaoEditar = ({ onClick }: BotaoEditarProps) => {
  return <Editar onClick={onClick}>Editar</Editar>
}

export default BotaoEditar
