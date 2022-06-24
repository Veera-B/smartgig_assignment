import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'users',
    initialState: {
        users: [],
        isLoading: false,
        isError: '',
    } ,
    reducers:{
        getUsers: (state) => {
            // debugger;
            return {
                ...state,
                isLoading:true,
            }
        },
        getUsersSuccess: (state,actions) => {
            return {
                ...state,
                users: actions.payload,
            }
        },
        getUsersFailed: (state,actions) => {
            return {
                ...state,
                isLoading: false,
                isError: actions.payload,
            }
        },

    }

});

export const {
    getUsers,
    getUsersSuccess,
    getUsersFailed,
} = userSlice.actions;

export default userSlice.reducer;