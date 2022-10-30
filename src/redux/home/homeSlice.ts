import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type HomeState = {
  name: string;
  stagedPhotos: object[];
};

const initialState: HomeState = {
  name: 'zucci daniel',
  stagedPhotos: [],
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
    setStagedPhotos: (state: any, action) => {
      state.stagedPhotos = [action.payload, ...state.stagedPhotos];
    },
  },
  extraReducers: builder => {},
});

export const {setCurrentUser, reset, setStagedPhotos} = homeSlice.actions;
export default homeSlice.reducer;
