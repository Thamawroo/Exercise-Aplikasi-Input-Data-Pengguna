import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from './index';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export const fetchUsers = (): AppThunk => async dispatch => {
  try {
    const response = await axios.get<User[]>('http://localhost:5000/users');
    dispatch(setUsers(response.data));
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export default userSlice.reducer;