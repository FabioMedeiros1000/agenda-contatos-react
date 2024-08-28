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
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: ContatoProps) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const emailInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (estaEditando && emailInputRef.current) {
      emailInputRef.current.focus()
    }
  }, [estaEditando])

  return (
    <>
      <S.Card>
        <S.Nome>{nome}</S.Nome>
        <S.Email
          ref={emailInputRef}
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.Telefone
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
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
