import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoProps } from '../../components/Contato'

type ContatoState = {
  itens: ContatoProps[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'João',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 1
    },
    {
      nome: 'Júlio',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 2
    },
    {
      nome: 'Bernardo',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 3
    },
    {
      nome: 'Alex',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 4
    },
    {
      nome: 'Fábio',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 5
    },
    {
      nome: 'Matheus',
      email: 'exemplo@gmail.com',
      telefone: '(82) 99187-1637',
      id: 6
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    editar: (state, action: PayloadAction<ContatoProps>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
