import { configureStore } from '@reduxjs/toolkit'

import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'
import { saveToLocalStorage } from '../utils/localStorage'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

store.subscribe(() => {
  console.log('Estado do Redux foi alterado, salvando no localStorage...')
  saveToLocalStorage('contacts', store.getState().contacts)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
