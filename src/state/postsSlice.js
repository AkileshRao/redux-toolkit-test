import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, body) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        body
                    }
                }
            }
        },
        removePost: {

        },
        updatePost: {

        },
    }
})

export const { addPost, removePost, updatePost } = postsSlice.actions
export default postsSlice.reducer
