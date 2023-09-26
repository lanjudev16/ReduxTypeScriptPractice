import { createSlice } from '@reduxjs/toolkit'

export interface themeState {
    value: boolean
}
const initialState: themeState = {
    value: false,
}
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        increment: (state) => {
            state.value =!state.value
        }
    },
})
export const { increment } = themeSlice.actions

export default themeSlice.reducer