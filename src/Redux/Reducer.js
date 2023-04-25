import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    ColorName: {},
};

const userDatas = createSlice({
  name: 'ColorName',
  initialState,
  reducers: {
    ColorNames: (state, action) => {
      console.log('reduxDta====>', action.payload);
      state.ColorName = action.payload;
    },
  },
});

export const {ColorNames} = userDatas.actions;

export default userDatas.reducer;
