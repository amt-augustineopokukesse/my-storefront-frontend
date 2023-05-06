import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewBusiness, NewUser } from './Authentication/initialState';

interface AuthState {
  newUser: NewUser | NewBusiness | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  newUser: null,
  isLoading: false,
  error: null,
};

export const addNewUser = createAsyncThunk(
  'auth/addNewUser',
  async (user: NewUser | NewBusiness, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', user);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addNewUser.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.newUser = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
