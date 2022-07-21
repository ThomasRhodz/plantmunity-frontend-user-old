import { createSlice } from '@reduxjs/toolkit';

export const forumSlice = createSlice({
    name:'forum',
    initialState: {
        forumImage:' ', //in string -> Base64
        
    },
    reducers: {
        setForum: (state, action) => {
            state.forum = action.payload
        },
    }
});

export const {setForum} = forumSlice.actions
export default forumSlice.reducer;