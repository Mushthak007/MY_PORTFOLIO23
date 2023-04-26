import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    ColorNameFirst: "#28e98c",
    Video:[]
};

const userDatas = createSlice({
  name: 'ColorName',
  initialState,
  reducers: {
    ColorNames: (state, action) => {
      console.log('reduxDta====>', action.payload);
      state.ColorNameFirst = action.payload;
    },
    VideoLink: (state, action) => {
      console.log('reduxDta====>', action.payload);
      state.Video = action.payload;
    },
  },
});

export const {ColorNames,VideoLink} = userDatas.actions;

export default userDatas.reducer;
