import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'

const MeusContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Container>
      <S.Titulo>Meus contatos</S.Titulo>
      <S.CardContainer>
        {itens.map((i) => (
          <li key={i.id}>
            <Contato
              id={i.id}
              email={i.email}
              nome={i.nome}
              telefone={i.telefone}
            />
          </li>
        ))}
      </S.CardContainer>
    </S.Container>
  )
}

export default MeusContatos
