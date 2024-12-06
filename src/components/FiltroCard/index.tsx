import { useSelector } from 'react-redux'
import { Container } from './styles'
import { RootReducer } from '../../store'

type Props = {
  children: string
  onClick: () => void
}

const FiltroCard = ({ children, onClick }: Props) => {
  const { showFavorites } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container onClick={onClick} highlight={showFavorites}>
      {children}
    </Container>
  )
}

export default FiltroCard
