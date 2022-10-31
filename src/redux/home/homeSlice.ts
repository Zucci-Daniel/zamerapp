import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

type HomeState = {
  name: string;
  stagedPhotos: object[];
  defaultPhotoIndex: number;
  showHorizontal: boolean;
};

const initialState: HomeState = {
  name: 'zucci daniel',
  stagedPhotos: [],
  defaultPhotoIndex: 0,
  showHorizontal: false,
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
    setDefaultPhotoIndex: (state: any, action) => {
      state.defaultPhotoIndex = action?.payload;
    },
    setShowHorizontal: (state: any, action) => {
      state.showHorizontal = action?.payload;
    },
  },
  extraReducers: builder => {},
});

export const {
  setCurrentUser,
  reset,
  setDefaultPhotoIndex: setDefaultIndex,
  setStagedPhotos,
  setShowHorizontal,
} = homeSlice.actions;
export default homeSlice.reducer;
