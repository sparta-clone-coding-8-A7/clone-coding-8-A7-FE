// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

// const refreshToken = localStorage.getItem("refreshToken")
//   ? localStorage.getItem("refreshToken")
//   : null;

// let config = {
//   headers: {
//     Authorization: userToken,
//     refreshToken: refreshToken,
//   },
// };

const initialState = {
  user: {
    usrname: "",
    email: "",
    fileUpload: "",
  },
};

export const __getUserInfo = createAsyncThunk(
  // action type string
  "detail/__getUserInfo",
  // callback function
  async (payload, thunkAPI) => {
    try {
      // const formData = payload;
      // configure header's Content-Type as mulipart/form-data
      // const config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      // make request to backend
      const { data } = await axios.get(
        "/api/user/kakaoLogin"
        // 추후 url 추가
        // {
        //   data: formData,
        // },
        // config
      );
      return thunkAPI.fulfillWithValue(data.data);
      console.log(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.err = action.payload;
    },
  },
});

// export const {} = commentSlice.actions;
export default userInfoSlice.reducer;
