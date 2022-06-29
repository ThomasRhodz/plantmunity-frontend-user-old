import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'user',
    initialState: {
        user:null,
        firstName:' ',
        lastName:' ',
        userName:' ',
        password:' ',
        email:' ',
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        // setFirstName: (state, action) => {
        //     state.firstName = action.payload
        // },
        // setLastName: (state, lName) => {
        //     state.lastName = lName.payload
        // },
        // setUserName: (state, uName) => {
        //     state.userName = uName.payload
        // },
        // setPassword: (state, password) => {
        //     state.password = password.payload
        // },
        // setEmail: (state, email) => {
        //     state.email = email.payload
        // },
    }
});

export const {setUser, setFirstName, setLastName, setUserName, setPassword, setEmail} = userSlice.actions
export default userSlice.reducer;