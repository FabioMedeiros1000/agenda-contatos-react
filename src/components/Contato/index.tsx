import { useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'

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
  id
}: ContatoProps) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nome, setNome] = useState('')

  const nomeInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (estaEditando && nomeInputRef.current) {
      nomeInputRef.current.focus()
    }
  }, [telefoneOriginal, emailOriginal, nomeOriginal, estaEditando])

  return (
    <>
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
                dispatch(editar({ nome, email, id, telefone }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar
              onClick={() => {
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
    </>
  )
}

export default Contato
