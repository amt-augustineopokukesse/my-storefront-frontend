import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { NewBusiness, NewUser, User, ResetPwEmail, NewPassword } from './Authentication/initialState';

const API_BASE_URL = 'https://hush-mything-production.up.railway.app';
interface AuthState {
  auth: {
    newUser: NewUser | NewBusiness | null,
    user: User | null,
    rpdEmail: ResetPwEmail | null,
    newPassword: NewPassword | null
  };
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  auth: {
    newUser: null,
    user: null,
    rpdEmail: null,
    newPassword: null
  },
  isLoading: false,
  error: null,
};

export const addNewUser = createAsyncThunk(
  'auth/addNewUser',
  async (user: NewUser | NewBusiness) => {
    try {
      //const response = await axios.post('https://reqres.in/api/users', user);
      const usertype = 'business_name' in user ? 'merchant' : 'customer';  
      const response = await axios.post(`${API_BASE_URL}/api/${usertype}/signup`, user);
      return response.data;
    } catch (error:any) {
      return (error.response.data.message);
    }
  }
);

export const userLogin = createAsyncThunk(
    'auth/userLogin',
    async (user: User) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/api/user/login`, user);
        //const response = await axios.post('https://reqres.in/api/users', user);
        return response.data;
      } catch (error:any) {
        //console.log(error);
        return (error.response.data.message);
      }
    }
);

export const sendEmail = createAsyncThunk(
    'auth/sendEmail',
    async (userEmail: ResetPwEmail, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/reset`, userEmail);
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (newpassword: NewPassword, { rejectWithValue }) => {
      try {
        const response = await axios.put(`${API_BASE_URL}/verify/reset`, newpassword);
        //const response = await axios.put('https://reqres.in/api/users/2', newpassword);
        return response.data;
      } catch (error:any) {
        return rejectWithValue(error.message);
      }
    }
);

export const resetAuthState = createAction<void>('auth/resetAuthState');


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: () => initialState,
  },
  extraReducers: builder => {
    /**Signup */
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
    /**Login */
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
    /**Send email */
    builder.addCase(sendEmail.pending, state => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(sendEmail.fulfilled, (state, action) => {
        state.auth.rpdEmail = action.payload;
        state.isLoading = false;
        state.error = null;
    });
        builder.addCase(sendEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
    });
    /**Reset Password */
    builder.addCase(resetPassword.pending, state => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
        state.auth.newPassword = action.payload;
        state.isLoading = false;
        state.error = null;
    });
        builder.addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;
