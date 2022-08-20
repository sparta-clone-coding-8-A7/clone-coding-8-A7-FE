// eslint-disable-next-line

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  files: [],
};

export const __uploadFile = createAsyncThunk(
  // action type string
  "detail/__uploadFile",
  // callback function
  async (payload, thunkAPI) => {
    try {
      const formData = payload;
      // configure header's Content-Type as mulipart/form-data
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      // make request to backend
      const response = await axios.post(
        "/api/jobPost/fileUpload",
        // 추후 url 추가
        {
          data: formData,
        },
        config
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fileUploadSlice = createSlice({
  name: "fileUploadSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [__uploadFile.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__uploadFile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.files = action.payload;
    },
    [__uploadFile.rejected]: (state, action) => {
      state.isLoading = false;
      state.files = [];
      state.err = action.payload;
    },
  },
});

// export const {} = commentSlice.actions;
export default fileUploadSlice.reducer;
