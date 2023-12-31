import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL)
    const data = await response.data
    return data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload
        })
    }
})

export const selectUserById = (state, userId) => 
    state.users.find((user) => user.id === userId);

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer