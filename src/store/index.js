import { configureStore } from '@reduxjs/toolkit'
import card from './card'

export default configureStore({
    reducer: {
        card
    },
})
