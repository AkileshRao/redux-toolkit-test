import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },
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
        removePost(state, action) {
            const { id } = action.payload
            return state.filter(post => post.id !== id)
        },
        updatePost(state, action) {
            const { title, body, id, userId } = action.payload
            const post = state.find(post => post.id === id)
            if (post) {
                post.title = title
                post.body = body
                post.userId = userId
            }
        },
    },

    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = [...state.posts, ...action.payload];
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
        },
    },
})

export const getAllPosts = state => state.posts.posts
export const getPostById = (state, postId) => state.posts.posts.find(post => post.id === postId)

export const { addPost, removePost, updatePost } = postsSlice.actions
export default postsSlice.reducer
