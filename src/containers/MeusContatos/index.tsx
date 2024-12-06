import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { useMemo } from 'react'

const MeusContatos = () => {
  const { itens, showFavorites } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const contatos = useMemo(() => {
    let contatosFiltrados = itens

    if (showFavorites) {
      contatosFiltrados = itens.filter((item) => item.isFavorite === true)
    }

    if (termo)
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )

    return contatosFiltrados
  }, [itens, termo, showFavorites])

  return (
    <S.Container>
      <S.Titulo>Meus contatos</S.Titulo>
      {itens.length === 0 ? (
        <S.P>Não há contatos cadastrados!</S.P>
      ) : (
        <S.CardContainer>
          {contatos.length === 0 ? (
            <S.P>Não há contatos que correspondem ao filtro aplicado!</S.P>
          ) : (
            contatos.map((i) => (
              <li key={i.id}>
                <Contato
                  isFavorite={i.isFavorite}
                  id={i.id}
                  email={i.email}
                  nome={i.nome}
                  telefone={i.telefone}
                  estaEditando={true}
                />
              </li>
            ))
          )}
        </S.CardContainer>
      )}
      <BotaoAdicionar />
    </S.Container>
  )
}

export default MeusContatos
