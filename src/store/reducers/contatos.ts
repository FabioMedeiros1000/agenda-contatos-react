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
    },
    cadastrar: (state, action: PayloadAction<ContatoProps>) => {
      const contatosIguais = state.itens.filter(
        (i) => i.nome.toLowerCase() === action.payload.nome.toLowerCase()
      ).length

      if (contatosIguais === 0) {
        state.itens.push(action.payload)
      } else {
        alert('Edite as informações do contato antes de criar outro!')
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
