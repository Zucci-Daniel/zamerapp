import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type HomeState = {
  name: string;
};

const initialState: HomeState = {
  name: 'zucci daniel',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    reset: (state: any) => {
      state.name = '';
    },
    setCurrentUser: (state: any, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setCurrentUser, reset} = homeSlice.actions;
export default homeSlice.reducer;
