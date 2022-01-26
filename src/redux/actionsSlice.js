import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    dogs: [],
    favourites: [],
    pending: false,
    error: false,
  },

  reducers: {
    setPending: (state) => {
      state.pending = true;
    },
    fetchDogs: (state, action) => {
      state.pending = false;
      state.dogs = action.payload;
    },
    likeDog: (state, action) => {
      state.pending = false;
      state.favourites = [...state.favourites, action.payload];
    },
    unLikeDog: (state, action) => {
      state.pending = false;
      state.favourites = state.favourites.filter((dog) => dog.id !== action.payload.id);
    },
    setError: (state, action) => {
      state.pending = false;
      state.error = {
        isErrorPresent: true,
        message: action.payload,
      };
    },
  },
});

export const { likeDog, unLikeDog, setPending, fetchDogs, setSuccess, setError } =
  userSlice.actions;
export default userSlice.reducer;

export const store = userSlice;
