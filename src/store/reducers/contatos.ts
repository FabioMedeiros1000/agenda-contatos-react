import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContatoProps } from '../../components/Contato'

type setStateType = {
  id: number
  value: boolean
}

type ContatoState = {
  itens: ContatoProps[]
  showFavorites: boolean
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Fábio Leandro Medeiros',
      email: 'fabio.leandro.medeiros@gmail.com',
      estaEditando: false,
      isFavorite: true,
      telefone: '(82) 99187-1637'
    },
    {
      id: 2,
      nome: 'José',
      email: 'jose@gmail.com',
      estaEditando: false,
      isFavorite: false,
      telefone: '(99) 99999-9999'
    },
    {
      id: 3,
      nome: 'Talles',
      email: 'talles@gmail.com',
      estaEditando: false,
      isFavorite: false,
      telefone: '(88) 88888-8888'
    },
    {
      id: 4,
      nome: 'Sara',
      email: 'sara@gmail.com',
      estaEditando: false,
      isFavorite: true,
      telefone: '(77) 77777-7777'
    }
  ],
  showFavorites: false
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    setEstaEditando: (state, action: PayloadAction<setStateType>) => {
      const contato = state.itens.find((item) => item.id === action.payload.id)
      if (contato) {
        contato.estaEditando = action.payload.value
      }
    },
    setIsFavorite: (state, action: PayloadAction<setStateType>) => {
      const contato = state.itens.find((item) => item.id === action.payload.id)

      if (contato) {
        contato.isFavorite = action.payload.value
      }
    },
    toggleShowFavorites: (state) => {
      state.showFavorites = !state.showFavorites
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

export const {
  remover,
  editar,
  setEstaEditando,
  cadastrar,
  setIsFavorite,
  toggleShowFavorites
} = contatosSlice.actions

export default contatosSlice.reducer
