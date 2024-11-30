import { useDispatch } from 'react-redux'
import { Cancelar } from './styles'
import { setEstaEditando } from '../../store/reducers/contatos'

type BotaoCancelarProps = {
  onClick: () => void
}

const BotaoCancelar = ({ onClick }: BotaoCancelarProps) => {
  return <Cancelar onClick={onClick}>Cancelar</Cancelar>
}

export default BotaoCancelar
