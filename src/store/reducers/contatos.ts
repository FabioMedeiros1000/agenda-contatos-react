import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contato } from '../../components/Card'

type ContatoState = {
  itens: Contato[]
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
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
