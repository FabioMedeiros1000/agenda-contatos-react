import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { useMemo } from 'react'

const MeusContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const contatos = useMemo(() => {
    if (!termo) return itens
    return itens.filter((t) =>
      t.nome.toLowerCase().includes(termo.toLowerCase())
    )
  }, [itens, termo])

  return (
    <S.Container>
      <S.Titulo>Meus contatos</S.Titulo>
      {itens.length === 0 ? (
        <S.P>Não há contatos cadastrados!</S.P>
      ) : (
        <S.CardContainer>
          {contatos.map((i) => (
            <li key={i.id}>
              <Contato
                id={i.id}
                email={i.email}
                nome={i.nome}
                telefone={i.telefone}
                estaEditando={true}
              />
            </li>
          ))}
        </S.CardContainer>
      )}
      <BotaoAdicionar />
    </S.Container>
  )
}

export default MeusContatos
