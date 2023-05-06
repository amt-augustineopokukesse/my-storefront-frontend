import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewBusiness, NewUser, User } from './Authentication/initialState';

interface AuthState {
  auth: {
    newUser: NewUser | NewBusiness | null,
    user: User | null
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  auth: {
    newUser: null,
    user: null
  },
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

export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async (user: User, { rejectWithValue }) => {
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
      state.auth.newUser = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      });
      builder.addCase(userLogin.fulfilled, (state, action) => {
        state.auth.user = action.payload;
        state.isLoading = false;
        state.error = null;
      });
      builder.addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default authSlice.reducer;
