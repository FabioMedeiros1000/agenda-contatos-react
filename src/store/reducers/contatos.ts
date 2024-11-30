import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoProps } from '../../components/Contato'

type ContatoState = {
  itens: ContatoProps[]
}

type EstaEditandoPayload = {
  id: number
  value: boolean
}

const initialState: ContatoState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    setEstaEditando: (state, action: PayloadAction<EstaEditandoPayload>) => {
      const contato = state.itens.find((item) => item.id === action.payload.id)
      if (contato) {
        contato.estaEditando = action.payload.value
      }
    },
    editar: (state, action: PayloadAction<ContatoProps>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (
      state,
      action: PayloadAction<Omit<ContatoProps, 'id' | 'estaEditando'>>
    ) => {
      const ultimoContato = state.itens[state.itens.length - 1]
      const contatoNovo = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1,
        estaEditando: true
      }
      state.itens.push(contatoNovo)
    }
  }
})

export const { remover, editar, setEstaEditando, cadastrar } =
  contatosSlice.actions

export default contatosSlice.reducer
