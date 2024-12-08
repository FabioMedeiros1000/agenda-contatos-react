import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ContactProps } from '../../components/Contact'

type setStateType = {
  id: number
  value: boolean
}

type ContactState = {
  items: ContactProps[]
  showFavorites: boolean
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Fábio Leandro',
      email: 'fabio.leandro.medeiros@gmail.com',
      isEditing: false,
      isFavorite: true,
      phone: '(82) 99187-1637'
    },
    {
      id: 2,
      name: 'José',
      email: 'jose@gmail.com',
      isEditing: false,
      isFavorite: false,
      phone: '(99) 99999-9999'
    },
    {
      id: 3,
      name: 'Talles',
      email: 'talles@gmail.com',
      isEditing: false,
      isFavorite: false,
      phone: '(88) 88888-8888'
    },
    {
      id: 4,
      name: 'Sara',
      email: 'sara@gmail.com',
      isEditing: false,
      isFavorite: true,
      phone: '(77) 77777-7777'
    }
  ],
  showFavorites: false
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    setisEditing: (state, action: PayloadAction<setStateType>) => {
      const contact = state.items.find((item) => item.id === action.payload.id)
      if (contact) {
        contact.isEditing = action.payload.value
      }
    },
    setIsFavorite: (state, action: PayloadAction<setStateType>) => {
      const contact = state.items.find((item) => item.id === action.payload.id)

      if (contact) {
        contact.isFavorite = action.payload.value
      }
    },
    toggleShowFavorites: (state) => {
      state.showFavorites = !state.showFavorites
    },
    edit: (state, action: PayloadAction<ContactProps>) => {
      const indexContact = state.items.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.items[indexContact] = action.payload
      }
    },
    register: (
      state,
      action: PayloadAction<Omit<ContactProps, 'id' | 'isEditing'>>
    ) => {
      const lastContact = state.items[state.items.length - 1]
      const newContact = {
        ...action.payload,
        id: lastContact ? lastContact.id + 1 : 1,
        isEditing: true
      }
      state.items.push(newContact)
    }
  }
})

export const {
  remove,
  edit,
  setisEditing,
  register,
  setIsFavorite,
  toggleShowFavorites
} = contactsSlice.actions

export default contactsSlice.reducer
