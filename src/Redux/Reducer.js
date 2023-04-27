import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ColorNameFirst: "#28e98c",
  Video: [
    {
      id: 1,
      video:
        "https://wpriverthemes.com/drake/wp-content/themes/drake/assets/images/video1.mp4",
      videoName: "Earth Lines Sphere",
    },
  ],
};

const userDatas = createSlice({
  name: "ColorName",
  initialState,
  reducers: {
    ColorNames: (state, action) => {
      console.log("reduxDta====>", action.payload);
      state.ColorNameFirst = action.payload;
    },
    VideoLink: (state, action) => {
      console.log("reduxDta====>", action.payload);
      state.Video = action.payload;
    },
  },
});

export const { ColorNames, VideoLink } = userDatas.actions;

export default userDatas.reducer;
