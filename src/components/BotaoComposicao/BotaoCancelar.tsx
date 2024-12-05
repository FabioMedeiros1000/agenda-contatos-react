import { Cancelar } from './styles'

type BotaoCancelarProps = {
  onClick: () => void
}

const BotaoCancelar = ({ onClick }: BotaoCancelarProps) => {
  return <Cancelar onClick={onClick}>Cancelar</Cancelar>
}

export default BotaoCancelar
