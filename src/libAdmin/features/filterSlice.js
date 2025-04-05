import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const fisherYatesAlgo = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array
// }

// export const fetchComponentsBySlug = createAsyncThunk(
//   'filter/fetchFilters', async (slug, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://breezend-backend-2.onrender.com/api/get-page",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ slug }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch filters");
//       }

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       console.error(error)
//       return rejectWithValue(error.message)
//     }
//   }
// );
const initialState = {
  selectedItems: [
    // {
    //     id: 0,
    //     name: "All",
    //     items: [],
    // },
    {
      id: 1,
      name: "Home",
      items: [
        {
          id: 101, image: "/Home.png", name: "Banner",
          schema: [
            { name: "heading", type: "text", required: false },
            { name: "description", type: "textarea", required: false, },
            { name: "buttontext", type: "text", required: false, }
          ]
        },
        {
          id: 102, image: "/homeslider.png", name: "Slider",
          schema: [
            { name: "Upload Image", type: "file", label: "Image", required: false },
          ],
        },
        {
          id: 103, image: "/home1.png", name: "OurClientsGetResults",
          schema: [
            { name: "heading", type: "text", label: "Heading", required: false },
          ]
        },
        {
          id: 104, image: "/testimonial.png", name: "CustomerSatisfaction",
          schema: [
            { name: "title", type: "text", required: false },
            { name: "heading", type: "text", required: false },
            { name: "text", type: "text", required: false },
          ]
        },
        {
          id: 105, image: "/Insights.png", name: "Findoutour",
          schema: [
            { name: "title", type: "text", required: false },
            { name: "heading", type: "text", required: false }
          ]
        },
        {
          id: 106, image: "/banner.png", name: "Growyourbusiness",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "btnText", type: "text" },
            { name: "btnText1", type: "text" },
          ]
        }
      ]
    },
    {
      id: 2,
      name: "About",
      items: []
    },
    {
      id: 3,
      name: "Contact Us",
      items: []
    },
    {
      id: 4,
      name: "Services",
      items: [
        //Social media advertising
        { id: 401, image: "/services/Banner.png" },
        {
          id: 402, image: "/services/ResultsDrivenSocial.png", name: "ResultsDrivenSocial",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" },
            { name: "icon", type: "file" },
            { name: "icon_text", type: "text" }
          ]
        },
        {
          id: 403, image: "/services/AdvertisingonSocialMedia.png", name: "AdvertisingonSocialMedia",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" }
          ]
        },
        {
          id: 404, image: "/services/PaidSocialMedia.png", name: "PaidSocialMedia",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "description", type: "textarea" },
            { name: "btnText", type: "text" },
            { name: "image", type: "file" }
          ]
        },
        {
          id: 405, image: "/services/WhyYourBusinessNeeds.png", name: "WhyYourBusinessNeeds",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" }
          ]
        },
        {
          id: 406, image: "/services/PPCAgencyThat.png", name: "PPCAgencyThat",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "description", type: "textarea" },
          ]
        },
        {
          id: 407, image: "/services/SocialMediaPlatforms.png", name: "SocialMediaPlatforms",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" }
          ]
        },
        {
          id: 408, image: "/services/SocialMediaPlatformsforBusiness.png", name: "SocialMediaPlatformsforBusiness",
          Schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "btnText", type: "text" },
          ]
        },
        {
          id: 409, image: "/services/HowMuchDoesSocial.png", name: "HowMuchDoesSocial",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" },
            { name: "icon", type: "file" },
            { name: "icon_text", type: "text" }
          ]
        },
        { id: 410, image: "/services/SMAServices.png" },
        {
          id: 411, image: "/services/WhyChoose.png", name: "WhyChoose",
          schema: [
            { name: "description", type: "textarea" },
            { name: "icon", type: "file" },
            { name: "iconTitle", type: "text" }
          ]
        },
        {
          id: 412, image: "/services/LetsConnect.png", name: "LetsConnect",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "btnText", type: "text" },
          ]
        }
        //PayPerClick(PPC)Marketing

      ]
    },
    {
      id: 5,
      name: "Our work",
      items: []
    },
    {
      id: 6,
      name: "Careers",
      items: [
        {
          id: 601, image: "/Carriers/AvailableJobsChoose.png", name: "AvailableJobsChoose",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "description", type: "textarea" },
            { name: "video", type: "file" },
            { name: "btnText", type: "text" },
          ]
        },
        {
          id: 602, image: "/Carriers/WhyBreezeEnd.png", name: "WhyBreezeEnd",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" }
          ]
        },
        {
          id: 603, image: "/Carriers/OurCulture.png", name: "OurCulture",
          schema: [
            { name: "title", type: "text" },
            { name: "text", type: "text" },
            { name: "btnText", type: "text" }
          ]
        },
        {
          id: 604, image: "/Carriers/WhoArethe.png", name: "WhoArethe",
          schema: [
            { name: "title", type: "text" },
            { name: "subtitle", type: "text" },
            { name: "text", type: "text" },
            { name: "btntext", type: "text" }
          ]
        },
        {
          id: 605, image: "/Carriers/MakeTheRight.png", name: "MakeTheRight",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" }
          ]
        },
        {
          id: 606, image: "/Carriers/DedicatedTeam.png", name: "DedicatedTeam",
          schema: [
            { name: "title", type: "text" },
            { name: "subtitle", type: "text" },
            { name: "description", type: "textarea" }
          ]
        },
        {
          id: 607, image: "/Carriers/OurCandidateExperience.png", name: "OurCandidateExperience",
          schema: [
            { name: "title", type: "text" },
            { name: "subtitle", type: "text" },
            { name: "description", type: "textarea" }
          ]
        },
        {
          id: 608, image: "/Carriers/BreezeEndTechnologySignificant.png", name: "BreezeEndTechnologySignificant",
          schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" },
            { name: "text", type: "text" }
          ]
        },
        {
          id: 609, image: "/Carriers/JoinOurGlobalTeam.png", name: "JoinOurGlobalTeam", schema: [
            { name: "title", type: "text" },
            { name: "description", type: "textarea" },
            { name: "image", type: "file" }
          ]
        }
      ]
    },
    {
      id: 7,
      name: "Portfolio",
      items: [
        { id: 701, image: "/portfolio/image1.png", name: "DigitalMarketingServices", schema:[
          { name: "heading", type: "text" },
          { name: "text", type: "text" },
        ] },

        { id: 702, image: "/portfolio/portfolio.png", name: "ViewAll", schema:[
          { name: "title", type: "text" },
          
        ] },
      ]
    },
    {
      id: 8,
      name: "Video Production",
      items: [
        { id: 801, image: "/video/image1.png", name: "DigitalMarketingServices", schema:[
          { name: "heading", type: "text" },
          { name: "text", type: "text" },
        ] },
        { id: 802, image: "/video/image2.png", name: "WhyChooseUsForYourNextv", schema:[
          { name: "title", type: "text" },
          { name: "description", type: "textarea" },
          { name: "link", type: "text" }
        ] },
        { id: 803, image: "/video/image3.png", name: "Kindofvideo", schema:[
          { name: "heading", type: "text" },
          { name: "description", type: "textarea" },

          { name: "title1", type: "text" },
          { name: "description1", type: "textarea" },
          { name: "link1", type: "text" },

          { name: "title2", type: "text" },
          { name: "description2", type: "textarea" },
          { name: "link2", type: "text" },

          { name: "title3", type: "text" },
          { name: "description3", type: "textarea" },
          { name: "link3", type: "text" },

          { name: "title4", type: "text" },
          { name: "description4", type: "textarea" },
          { name: "link4", type: "text" }
        ] },

        { id: 804, image: "/video/image4.png", name: "VideoProductionServices", schema:[
          { name: "title", type: "text" },
        ] },
      ]
    },
    {
      id: 9,
      name: "Clients",
      items: [
        { id: 801, image: "/clients/image1.png", name: "DigitalMarketingServices", schema:[
          { name: "heading", type: "text" },
          { name: "text", type: "text" },
        ] },
        { id: 802, image: "/clients/client.png", name: "AvailableJobsChoose", schema:[
          { name: "title", type: "text" },
          { name: "description", type: "textarea" },
          { name: "image", type: "file" }
        ] }
      ]
    },
    {
      id: 10,
      name: "Case Study",
      items: [
        { id: 901, image: "/case-study/image1.png", name: "DigitalMarketingServices", schema:[
          { name: "heading", type: "text" },
          { name: "text", type: "text" },
        ] },
        { id: 902, image: "/case-study/Revamp.png", name: "AvailableJobsChoose", schema:[
          { name: "title", type: "text" },
          { name: "description", type: "textarea" },
          { name: "image", type: "file" }
        ] },
        { id: 903, image: "/case-study/Case Studies.png", name: "AvailableJobsChoose", schema:[
          { name: "title", type: "text" },
          { name: "description", type: "textarea" },
          { name: "image", type: "file" }
        ] },
        { id: 904, image: "/case-study/joinourmail.png", name: "AvailableJobsChoose", schema:[
          { name: "title", type: "text" },
          { name: "description", type: "textarea" },
          { name: "image", type: "file" }
        ] }
      ]
    }
  ],
  filteredItems: [],
  selectedImage: [],
}

const filterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      // if (action.payload === "All") {
      //     const allImages = state.selectedItems.flatMap(item => item.items);
      //     state.filteredItems = fisherYatesAlgo(allImages)
      // } else {
      //     const category = state.selectedItems.find((item) =>
      //         item.name === action.payload);
      //     state.filteredItems = category ? category.items : [];
      // }
      const category = state.selectedItems.find((item) =>
        item.name === action.payload);
      state.filteredItems = category ? category.items : [];
    },

    setSelectedImage: (state, action) => {
      // console.log(name)
      const { image, id, schema, name } = action.payload;
      // const Id = Math.floor(id / 100);
      // const uniqueId = nanoid();

      // const matchedItem = state.selectedItems.find((item) => item.id === Id);
      // const name = matchedItem ? matchedItem.name : ""
      // console.log(name);
      state.selectedImage.push({ image, id, schema, name });
    },

    reorderImages: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;

      const [removed] = state.selectedImage.splice(sourceIndex, 1);
      state.selectedImage.splice(destinationIndex, 0, removed);
    },

    removeSelectedImage: (state, action) => {

      const newArray = action.payload
      // console.log(newArray)

      const filterIndex = state.selectedImage.filter(
        (_, i) =>
          i !== newArray
      );
      state.selectedImage = filterIndex
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(fetchComponentsBySlug.pending, (state) => {
    //       state.status = "loading";
    //     })
    //     .addCase(fetchComponentsBySlug.fulfilled, (state, action) => {
    //       state.status = "succeeded";
    //       state.components = action.payload;
    //     })
    //     .addCase(fetchComponentsBySlug.rejected, (state, action) => {
    //       state.status = "failed";
    //       state.error = action.payload;
    //     });
    // },
  }
});

export const {
  filterByName,
  setSelectedImage,
  reorderImages,
  removeSelectedImage,
} = filterSlice.actions;
export default filterSlice.reducer;
