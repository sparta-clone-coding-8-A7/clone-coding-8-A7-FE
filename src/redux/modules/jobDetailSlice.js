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
//     "Content-Type": "multipart/form-data",
//     Authorization: userToken,
//     RefreshToken: refreshToken,
//   },
// };

const initialState = {
  user: {
    username: "",
    email: "",
    fileUpload: "",
  },
  file: [],
  dataLike: true,
  isLoading: false,
  success: null,
  error: null,
};

export const __uploadFile = createAsyncThunk(
  // action type string
  "detail/__uploadFile",
  // callback function
  async (payload, thunkAPI) => {
    try {
      const formData = payload;
      // configure header's Content-Type as mulipart/form-data
      // const config = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };
      // make request to backend
      const response = await axios.post(
        "/api/jobpost/file",
        // 추후 url 추가
        // 보내는 방식이 맞는지 (성우님과 성의)
        {
          data: formData,
        }
        // config
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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

export const __toggleLike = createAsyncThunk(
  "detail/__toggleLike",
  async (postId, thunkAPI) => {
    try {
      // const Refreshtoken = localStorage.getItem('refreshToken');
      // const Authorization = localStorage.getItem('authorization');
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `${Authorization}`,
        // Refreshtoken: `${Refreshtoken}`
      };
      const response = await axios.post(
        `/api/jobpost/${postId}/heart`,
        {},
        { headers: headers }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const jobDetailSlice = createSlice({
  name: "jobDetailSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__uploadFile.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__uploadFile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.file = action.payload;
    },
    [__uploadFile.rejected]: (state, action) => {
      state.isLoading = false;
      state.file = [];
      state.err = action.payload;
    },
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
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataLike = action.payload;
    },
    [__toggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {} = jobDetailSlice.actions;
export default jobDetailSlice.reducer;
