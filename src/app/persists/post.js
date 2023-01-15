import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name:'post',
    initialState: {
        post:' ',
        
    },
    reducers: {
        setPost: (state, action) => {
            state.post = action.payload
        },
    }
});

export const {setPost} = postSlice.actions
export default postSlice.reducer;