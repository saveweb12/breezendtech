
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendDataToBackend = createAsyncThunk(
  'formData/send',
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const response = await axios.post('https://breezend-backend-2.onrender.com/api/create-page', formData);

      return response.formData
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
export const getDataFromBackend = createAsyncThunk(
  'pageData/receive',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://breezend-backend-2.onrender.com/api/get-all-page');
      return response.data;
    } catch (error) {
      console.error('Create Page API Error:', error.response?.data || 'Something went wrong');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);
export const deletePages = createAsyncThunk(
  'delete/Pagedata',
  async (pageIds, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://breezend-backend-2.onrender.com/api/delete-page',
        { pageId: pageIds },
      )
      // dispatch(getDataFromBackend());
      console.log("Delete Responses:", response.data)
      return response.data;
    } catch (error) {
      console.error('Delete API Error:', error.response?.data || 'Something went wrong');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

export const updatePages = createAsyncThunk(
  'update/Pagedata',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`https://breezend-backend-2.onrender.com/api/update-page/${id}`, formData)
      console.log("Update Responses:", response.data)
      return response.data;
    } catch (error) {
      console.error('Update API Error:', error.response?.data || 'Something went wrong');
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const formSlice = createSlice({
  name: 'data',

  initialState: {
    data: [],
    status: 'idle',
    error: null
  },

  reducers: {},


  extraReducers: (builder) => {
    builder
      .addCase(sendDataToBackend.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendDataToBackend.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(sendDataToBackend.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getDataFromBackend.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getDataFromBackend.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getDataFromBackend.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(deletePages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(deletePages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updatePages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(updatePages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
  },
});


export const { setPages } = formSlice.actions
export default formSlice.reducer;
