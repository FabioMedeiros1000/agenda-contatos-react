import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import { useState } from 'react'

const MeusContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const [cadastrando, setCadastrando] = useState(false)

  const handleBotaoClick = (evento: boolean) => {
    if (evento === true) {
      setCadastrando(true)
    } else {
      setCadastrando(false)
    }
  }

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
                cadastrando={cadastrando}
                onClickBotao={handleBotaoClick}
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
