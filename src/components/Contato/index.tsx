import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import { BotaoAdicionarProps } from '../BotaoAdicionar'

import { RootReducer } from '../../store'

export type ContatoProps = {
  nome: string
  email: string
  telefone: string
  id: number
}

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id,
  cadastrando,
  onClickBotao
}: ContatoProps & BotaoAdicionarProps) => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const [estaEditando, setEstaEditando] = useState(cadastrando || false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  const nomeInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (estaEditando && nomeInputRef.current) {
      nomeInputRef.current.focus()
    }
  }, [estaEditando])

  useEffect(() => {
    const contatoAtual = itens.find((item) => item.id === id)
    if (contatoAtual) {
      setNome(contatoAtual.nome || '')
      setEmail(contatoAtual.email || '')
      setTelefone(contatoAtual.telefone || '')
    }
  }, [id, itens])

  return (
    <S.Card>
      <S.Name
        ref={nomeInputRef}
        disabled={!estaEditando}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Nome"
      />
      <S.Email
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="Email"
      />
      <S.Telefone
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        placeholder="Telefone"
      />
      {estaEditando ? (
        <>
          <S.BotaoSalvar
            onClick={() => {
              if (nome.trim().length === 0) {
                alert('Digite o nome do contato')
              } else {
                if (cadastrando) onClickBotao(false)

                dispatch(
                  editar({
                    nome: nome.trim(),
                    email: email.trim(),
                    telefone: telefone.trim(),
                    id
                  })
                )
                setEstaEditando(false)
              }
            }}
          >
            Salvar
          </S.BotaoSalvar>
          <S.BotaoCancelar
            onClick={() => {
              if (cadastrando && !nome.trim()) {
                onClickBotao(false)
                dispatch(remover(id))
              } else {
                setEstaEditando(false)
                setNome(nomeOriginal)
                setEmail(emailOriginal)
                setTelefone(telefoneOriginal)
              }
            }}
          >
            Cancelar
          </S.BotaoCancelar>
        </>
      ) : (
        <>
          <S.BotaoEditar onClick={() => setEstaEditando(true)}>
            Editar
          </S.BotaoEditar>
          <S.BotaoExcluir onClick={() => dispatch(remover(id))}>
            Excluir
          </S.BotaoExcluir>
        </>
      )}
    </S.Card>
  )
}

export default Contato
