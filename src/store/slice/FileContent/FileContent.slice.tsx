import { createSlice } from '@reduxjs/toolkit'

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        content: null,
        something: null,
    },
    reducers: {
        setContent(state, action) {
            state.content = action.payload;
        },
    },
})

export const { setContent } = contentSlice.actions;
export default contentSlice.reducer;