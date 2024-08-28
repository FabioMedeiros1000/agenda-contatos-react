import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'
import { P } from '../../styles'
import variaveis from '../../styles/variaveis'

const MeusContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (t) => t.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <S.Container>
      <S.Titulo>Meus contatos</S.Titulo>
      {itens.length === 0 ? (
        <P color={variaveis.branco} bold={false} size={22}>
          Não há contatos cadastrados!
        </P>
      ) : (
        <S.CardContainer>
          {contatos.map((i) => (
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
      )}
    </S.Container>
  )
}

export default MeusContatos
