import FilterCard from '../../components/FilterCard'
import FilterName from '../../components/FilterName'

import * as S from './styles'

const Sidebar = () => {
  return (
    <S.Container>
      <S.Title>Filtros</S.Title>
      <FilterName />
      <FilterCard />
    </S.Container>
  )
}

export default Sidebar
