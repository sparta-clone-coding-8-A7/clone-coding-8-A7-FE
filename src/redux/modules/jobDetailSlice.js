// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dataServer = process.env.REACT_APP_DATA;
const dataJi = process.env.REACT_APP_JI;

const initialState = {
  user: {},
  companyDetail: [],
  isLike: {},
  isNum: {},
  isLoading: false,
  success: null,
  error: null,
};

const Refreshtoken = localStorage.getItem("refreshtoken");
const Authorization = localStorage.getItem("authorization");

export const __getToggleLike = createAsyncThunk(
  "like/__getToggleLike",
  async (payload, thunkAPI) => {
    try {
      const jobPostId = payload;
      // console.log(payload);
      // const memberId = localStorage.getItem("id");
      // console.log(memberId);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`,
      };
      const response = await axios.get(
        dataServer + `/jobPost/${jobPostId}/heart`,
        {},
        { headers: headers }
      );
      console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __toggleLike = createAsyncThunk(
  "like/__toggleLike",
  async (payload, thunkAPI) => {
    try {
      const jobPostId = payload;
      // console.log(payload);
      // const Refreshtoken = localStorage.getItem("refreshtoken");
      // const Authorization = localStorage.getItem("authorization");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`,
      };
      const response = await axios.post(
        dataServer + `/jobPost/${jobPostId}/heart`,
        {},
        { headers: headers }
      );
      // console.log(response.data);
      // console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCompanyDetail = createAsyncThunk(
  "detail/__getCompanyDetail",
  async (payload, thunkAPI) => {
    try {
      const jobPostId = payload;
      // console.log(payload);
      // const Refreshtoken = localStorage.getItem("refreshtoken");
      // const Authorization = localStorage.getItem("authorization");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `${Authorization}`,
        Refreshtoken: `${Refreshtoken}`,
      };
      const response = await axios.get(
        dataServer + `/jobPost/${jobPostId}`,
        {},
        { headers: headers }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data.data);
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
    [__getToggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getToggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isNum = action.payload;
      // console.log(action.payload);
      // console.log(state.isLike);
    },
    [__getToggleLike.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__toggleLike.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__toggleLike.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLike = action.payload;
      // console.log(action.payload);
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
