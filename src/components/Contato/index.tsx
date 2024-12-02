import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'

import * as S from './styles'

import { BotaoAdicionarProps } from '../BotaoAdicionar'

import { RootReducer } from '../../store'
import BotaoComposicao from '../BotaoComposicao'
import { setEstaEditando } from '../../store/reducers/contatos'

export type ContatoProps = {
  nome: string
  email: string
  telefone: string
  id: number
  estaEditando: boolean
}

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: ContatoProps & BotaoAdicionarProps) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  const nomeInputRef = useRef<HTMLInputElement>(null)

  const contatoAtual = itens.find((item) => item.id === id)

  useEffect(() => {
    if (contatoAtual) {
      setNome(contatoAtual.nome || '')
      setEmail(contatoAtual.email || '')
      setTelefone(contatoAtual.telefone || '')
    }
  }, [id, itens, contatoAtual])

  useEffect(() => {
    if (nomeInputRef.current) {
      nomeInputRef.current.focus()
    }
  }, [nomeInputRef])

  const handleEditar = () => {
    dispatch(setEstaEditando({ id, value: true }))
  }

  const handleCancelar = () => {
    dispatch(setEstaEditando({ id, value: false }))
  }

  return (
    <S.Card>
      <S.Name
        ref={nomeInputRef}
        disabled={!contatoAtual?.estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
      />
      <S.Email
        disabled={!contatoAtual?.estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email"
      />
      <S.Telefone
        disabled={!contatoAtual?.estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone"
      />
      {contatoAtual?.estaEditando ? (
        <BotaoComposicao>
          <BotaoComposicao.Salvar
            nome={nome}
            email={email}
            id={id}
            telefone={telefone}
          />
          <BotaoComposicao.Cancelar onClick={handleCancelar} />
        </BotaoComposicao>
      ) : (
        <BotaoComposicao>
          <BotaoComposicao.Editar onClick={handleEditar} />
          <BotaoComposicao.Excluir id={id} />
        </BotaoComposicao>
      )}
    </S.Card>
  )
}

export default Contato
