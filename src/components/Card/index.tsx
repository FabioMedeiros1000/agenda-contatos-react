import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'
import { RootReducer } from '../../store'
import { remover } from '../../store/reducers/contatos'

export type Contato = {
  nome: string
  email: string
  telefone: string
  id: number
}

const Card = () => {
  const dispatch = useDispatch()

  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.CardContainer>
      {itens.map((i) => (
        <S.Card key={i.id}>
          <S.Nome>{i.nome}</S.Nome>
          <S.Email>{i.email}</S.Email>
          <S.Telefone>{i.telefone}</S.Telefone>
          <S.BotaoEditar>Editar</S.BotaoEditar>
          <S.BotaoExcluir
            onClick={() => {
              console.log(i.id)
              dispatch(remover(i.id))
            }}
          >
            Excluir
          </S.BotaoExcluir>
        </S.Card>
      ))}
    </S.CardContainer>
  )
}

export default Card
