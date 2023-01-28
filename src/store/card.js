import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        number: '',
        name: '',
        expireDate: '',
        cvv: ''
    },
    reducers: {
    },
})

export const cardActions = cardSlice.actions
export default cardSlice.reducer
