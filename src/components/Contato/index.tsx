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

  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [nome, setNome] = useState(nomeOriginal)

  const nomeInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (estaEditando && nomeInputRef.current) {
      nomeInputRef.current.focus()
    }
  }, [estaEditando])

  useEffect(() => {
    if (cadastrando === true && id === itens.length) {
      setEstaEditando(true)
    } else {
      setEstaEditando(false)
    }
  }, [cadastrando, id, itens.length])

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
              if (nome.length === 0) {
                alert('Digite o nome do contato')
              } else {
                if (cadastrando) onClickBotao(false)

                dispatch(editar({ nome, email, id, telefone }))
                setEstaEditando(false)
              }
            }}
          >
            Salvar
          </S.BotaoSalvar>
          <S.BotaoCancelar
            onClick={() => {
              if (cadastrando === true) {
                onClickBotao(false)
                dispatch(remover(id))
              }
              setEstaEditando(false)
              setTelefone(telefoneOriginal)
              setEmail(emailOriginal)
              setNome(nomeOriginal)
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
