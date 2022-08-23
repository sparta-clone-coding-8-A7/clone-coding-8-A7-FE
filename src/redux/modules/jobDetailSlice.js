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
  user: {},
  file: [],
  companyDetail: [],
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
      const response = await axios.get(
        // "/api/user/kakaoLogin"
        "https://run.mocky.io/v3/1ddd8034-8e73-4fa4-8b9d-39b7f8303719"
        // 추후 url 추가
        // {
        //   data: formData,
        // },
        // config
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
      // console.log(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const __toggleLike = createAsyncThunk(
  "like/__toggleLike",
  async (postId, thunkAPI) => {
    try {
      const jobPostId = postId;
      // const Refreshtoken = localStorage.getItem('refreshToken');
      // const Authorization = localStorage.getItem('authorization');
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `${Authorization}`,
        // Refreshtoken: `${Refreshtoken}`
      };
      const response = await axios.post(
        `/api/jobPost/${jobPostId}/heart`,
        {},
        { headers: headers }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCompanyDetail = createAsyncThunk(
  "detail/__getCompanyDetail",
  async (payload, thunkAPI) => {
    try {
      // const jobPostId = payload;
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `${Authorization}`,
        // Refreshtoken: `${Refreshtoken}`
      };
      const response = await axios.get(
        // `/api/jobPost/${jobPostId}`,
        "https://run.mocky.io/v3/c06b751d-91d1-40cf-b0d9-e02c79ca0685",
        {},
        { headers: headers }
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
      // return thunkAPI.fulfillWithValue(response.data.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      state.error = action.payload;
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
    [__getCompanyDetail.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getCompanyDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.companyDetail = action.payload;
      // state.success = action.payload;
    },
    [__getCompanyDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.companyDetail = [];
      state.error = action.payload;
    },
  },
});

// export const {} = jobDetailSlice.actions;
export default jobDetailSlice.reducer;
