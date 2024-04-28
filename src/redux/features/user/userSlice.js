import { createSlice } from '@reduxjs/toolkit';
import data from '../../../data/data.json';

const initialState = {
   currentUser: data.currentUser,
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
