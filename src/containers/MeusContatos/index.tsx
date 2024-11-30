import { useSelector, useDispatch } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { useState, useMemo } from 'react'
import { cadastrar } from '../../store/reducers/contatos'

const MeusContatos = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const [cadastrando, setCadastrando] = useState(false)

  const handleBotaoClick = (evento: boolean) => {
    setCadastrando(evento)
  }

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
                cadastrando={cadastrando && i.id === itens.length}
                onClickBotao={handleBotaoClick}
                estaEditando={true}
              />
            </li>
          ))}
        </S.CardContainer>
      )}
      <BotaoAdicionar
        cadastrando={cadastrando}
        onClickBotao={handleBotaoClick}
      />
    </S.Container>
  )
}

export default MeusContatos
