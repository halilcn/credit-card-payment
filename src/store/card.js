import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        number: '',
        name: '',
        expireDate: '',
        cvv: '',
        isSelectedBackOfCard: false
    },
    reducers: {
        toggleCardFace: state => {
            state.isSelectedBackOfCard = !state.isSelectedBackOfCard
        },
        updateCardInformation: (state, action) => {
            return { ...state, ...action.payload }
        }
    },
})

export const cardActions = cardSlice.actions
export default cardSlice.reducer
