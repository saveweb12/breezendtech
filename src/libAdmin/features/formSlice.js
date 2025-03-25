// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   formConfig: [],
//   formSchema: {
//     101: [
//       { name: "Heading", type: "text", label: "Heading", required: true },
//       {
//         name: "Description",
//         type: "textarea",
//         label: "Description",
//         required: true,
//       },
//       {
//         name: "ButtonText",
//         type: "text",
//         label: "Button Text",
//         required: true,
//       },
//     ],
//     102: [
//       {
//         name: "Upload Image",
//         type: "file",
//         label: "Image",
//         required: "true",
//         required: true,
//       }
//     ],
//     103: [
//       { name: "Heading", type: "text", label: "Heading", required: true },
//       { name: "Upload Video", type: "file", label: "Upload", required: true },
//       { name: "Sub Heading", type: "text", label: "Sub Heading", required: true, },
//       { name: "Description", type: "text", label: "Description", required: true, },
//     ],
//     105: [ { name: "title", type: "text", required: false },
//       { name: "Heading", type: "text", required: true },
//       { name: "Card Title", type: "text", required: false },
//       { name: "Card Text", type: "text", required: false },
//       { name: "Card Description", type: "text", required: false },
//     ],
//     106: [
//       { name: "title", type: "text" },
//       { name: "text", type: "text" },
//       { name: "Button Icon", type: "file" },
//       { name: "Button Text", type: "text" },
//     ],

//     201: [
//       { name: "title", type: "text", required: false },
//       { name: "title", type: "text", required: false },
//       { name: "title", type: "text", required: false },
//       { name: "title", type: "text", required: false },
//     ],

//     302: [
//       { name: "title", type: "text", required: false },
//       { name: "description", type: "text", required: false },
//       { name: "text", type: "text", required: false },
//       { name: "image", type: "text", required: false },
//       { name: "icon", type: "file", required: false },
//       { name: "icon_text", type: "text", required: false },
//       { name: "subDescription", type: "text", required: false },
//     ],
//     303: [
//       { name: "title", type: "text", required: false },
//       { name: "description", type: "text", required: false },
//       { name: "image", type: "text", required: false },
//     ],
//     304: [
//       { name: "title", type: "text", required: false },
//       { name: "description", type: "text", required: false },
//       { name: "Button Text", type: "text" },
//       { name: "image", type: "text", required: false },
//     ],
//     305: [
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Image", type: "text", required: false },
//       { name: "Section Icon", type: "file", required: false },
//       { name: "Section title", type: "text", required: false },
//       { name: "Section description", type: "text", required: false },
//     ],
//     306: [
//       { name: "title", type: "text", required: false },
//       { name: "description", type: "text", required: false },
//       { name: "text", type: "text", required: false },
//       { name: "Card Image", type: "file", required: false },
//       { name: "Card Image Title", type: "text", required: false },
//       { name: "Card Number", type: "number", required: false },
//       { name: "Card Number Text", type: "text", required: false },
//       { name: "Card Number1", type: "number", required: false },
//       { name: "Card Number Text1", type: "text", required: false },
//       { name: "card SubTitle", type: "text", required: false },
//       { name: "Card Title Icon", type: "file", required: false },
//       { name: "Card Description", type: "text", required: false },
//     ],
//     307: [
//       { name: "Title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Button text", type: "text", required: false },
//       { name: "Card Icon", type: "file", required: false },
//       { name: "Card Title", type: "text", required: false },
//       { name: "Card Description", type: "text", required: false },
//     ],
//     309: [
//       { name: "Title", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Icon", type: "file", required: false },
//       { name: "ICon text", type: "text", required: false },
//     ],
//     310: [
//       //Same as WhyYourBusinessNeeds or id-305
//       { name: "Title", type: "text", required: false },
//       { name: "Subtitle", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Section Icon", type: "file", required: false },
//       { name: "Section title", type: "text", required: false },
//       { name: "Section description", type: "text", required: false },
//     ],
//     311: [
//       { name: "Title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Section Icon", type: "file", required: false },
//       { name: "Section Icon Text", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//     ],
//     312: [
//       { name: "Title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Button Text", type: "text", required: false },
//     ],
//     501: [
//       { name: "Title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "video", type: "file", required: false },
//       { name: "Text Button", type: "text", required: false },
//     ],
//     502: [
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Icon", type: "file", required: false },
//       { name: "Icon Link", type: "text", required: false },
//     ],
//     503: [
//       { name: "Title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Button Text", type: "text", required: false },
//       { name: "Icon", type: "file", required: false },
//       { name: "Title link", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//     ],
//     504: [
//       { name: "Title", type: "text", required: false },
//       { name: "Sub title", type: "text", required: false },
//       { name: "Text", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Button text", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//     ],
//     505: [
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Button text", type: "text", required: false },
//       { name: "Card Heading", type: "text", required: false },
//       { name: "Card Text", type: "text", required: false },
//       { name: "CardBtn Text", type: "text", required: false },
//     ],
//     506: [
//       { name: "Subtitle", type: "text", required: false },
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Name", type: "text", required: false },
//       { name: "Persons Post", type: "text", required: false },
//       { name: "Social handle", type: "file", required: false },
//     ],
//     507: [
//       { name: "Title", type: "text", required: false },
//       { name: "Subtitle", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Button text", type: "text", required: true },
//       { name: "Image", type: "file", required: false },
//       { name: "Image Title", type: "text", required: false },
//       { name: "Image text", type: "text", required: false },
//     ],
//     508: [
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Text", type: "text", required: false },
//     ],
//     509: [
//       { name: "Title", type: "text", required: false },
//       { name: "Description", type: "text", required: false },
//       { name: "Image", type: "file", required: false },
//       { name: "Number", type: "text", required: false },
//       { name: "text", type: "text", required: false },
//     ],
//   },
// };

// const formSlice = createSlice({
//   name: 'Form',
//   initialState,
//   reducers: {
//     setFormConfig: (state, action) => {
//       const { imageId, config, instanceId } = action.payload;


//       if (!state.formConfig[imageId]) {
//         state.formConfig[imageId] = {};
//       }

//       if (!state.formConfig[imageId][instanceId]) {
//         state.formConfig[imageId][instanceId] = {};
//       }

//       Object.keys(config).forEach((key) => {
//         if (config[key] instanceof FileList && config[key].length > 0) {
//           const file = config[key][0];

//           // Add file URL and metadata
//           config[`${key}Url`] = URL.createObjectURL(file);
//           // config[`${key}Metadata`] = {
//           //     name: file.name,
//           //     size: file.size,
//           //     type: file.type,
//           // };

//           delete config[key];
//         }
//       });


//       state.formConfig[imageId][instanceId] = { ...config };
//     }
//   }
// });

// export const { setFormConfig } = formSlice.actions;
// export default formSlice.reducer;
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
