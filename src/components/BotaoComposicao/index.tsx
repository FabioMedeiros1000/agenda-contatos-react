import React, { ReactNode } from 'react'

import BotaoSalvar from './BotaoSalvar'
import BotaoCancelar from './BotaoCancelar'
import BotaoEditar from './BotaoEditar'
import BotaoExcluir from './BotaoExcluir'

type BotaoComposicaoProps = {
  children: ReactNode
}

const BotaoComposicao = ({ children }: BotaoComposicaoProps) => {
  return <div>{children}</div>
}

BotaoComposicao.Salvar = BotaoSalvar
BotaoComposicao.Cancelar = BotaoCancelar
BotaoComposicao.Editar = BotaoEditar
BotaoComposicao.Excluir = BotaoExcluir

export default BotaoComposicao
