import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: 'Bill Gates'},
    { id: '2', name: 'Elon Musk'},
    { id: '3', name: 'Jeff Bezos'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer