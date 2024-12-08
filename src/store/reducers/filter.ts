import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  nameToSearch?: string
}

const initialState: FilterState = {
  nameToSearch: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeNameToSearch: (state, action: PayloadAction<string>) => {
      state.nameToSearch = action.payload
    }
  }
})

export const { changeNameToSearch } = filterSlice.actions

export default filterSlice.reducer
