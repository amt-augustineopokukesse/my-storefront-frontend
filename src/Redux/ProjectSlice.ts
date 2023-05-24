import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
//import api from "./Authentication/axiosClient";
import { ProductState, ProjectState, initialProjectState } from "./ProjectInitialState";
import api from "./Authentication/axiosClient";



const getBusinessId = async () => {
  const merchant = localStorage.getItem("merchant"); 
  
  if (merchant) {
    const mX = JSON.parse(merchant)
    return mX.business.id;
  } else return ""
};

const getProjectId = async () => {
  const project = localStorage.getItem("project"); 
  
  if (project) {
    const pX = JSON.parse(project)
    console.log("project ID: ", pX.id)
    return pX.id;
  } else return ""
};

// handle save
export const saveProject =  createAsyncThunk(
  "project/saveProject",
  async (project: ProjectState) => {
    try {
      const response = await api.post("/project/new", {
        business_id: await getBusinessId(),
        ...project,
      });
      // console.log(response.data);
      //const response = await axios.post('https://reqres.in/api/users', project);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log("API error:", error.response.data.message); // Log the API error message
          return error.response.data.message;
        }
      }
      console.log("An error occurred:", error); // Log any other errors that occur
      return "An error occurred";
    }
  }
);


// handleUpdate
export const updateProject =  createAsyncThunk(
  "project/updateProject",
  async (project: ProjectState) => {
    try {
      const { template, ...values } = project;
      const response = await api.put("/project/update", {
        project_id: await getProjectId(),
        template: template,
        ...values
      });
      // console.log(response.data);
      //const response = await axios.post('https://reqres.in/api/users', project);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log("API error:", error.response.data.message); // Log the API error message
          return error.response.data.message;
        }
      }
      console.log("An error occurred:", error); // Log any other errors that occur
      return "An error occurred";
    }
  }
);



// handlePublish
export const publishProject =  createAsyncThunk(
  "project/publishProject",
  async (project: ProjectState) => {
    try {
      const response = await api.put("/project/publish", {
        project_id: await getProjectId(),
      });
      // console.log(response.data);
      //const response = await axios.post('https://reqres.in/api/users', project);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log("API error:", error.response.data.message); // Log the API error message
          return error.response.data.message;
        }
      }
      console.log("An error occurred:", error); // Log any other errors that occur
      return "An error occurred";
    }
  }
);


const ProjectSlice = createSlice({
  name: "project",
  initialState: initialProjectState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setFacebookURL: (state, action: PayloadAction<string>) => {
      state.facebookURL = action.payload;
    },
    setInstagramURL: (state, action: PayloadAction<string>) => {
      state.instagramURL = action.payload;
    },
    setTwitterURL: (state, action: PayloadAction<string>) => {
      state.twitterURL = action.payload;
    },
    setPublished: (state, action: PayloadAction<boolean>) => {
      state.published = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setBannerUrl: (state, action: PayloadAction<string>) => {
      state.bannerUrl = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.template.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.template.secondaryColor = action.payload;
    },
    setBodyFontColor: (state, action: PayloadAction<string>) => {
      state.template.bodyFontColor = action.payload;
    },
    setNameFontFamily: (state, action: PayloadAction<string>) => {
      state.template.nameFontFamily = action.payload;
    },
    setBodyFontFamily: (state, action: PayloadAction<string>) => {
      state.template.bodyFontFamily = action.payload;
    },
    setNameFontSize: (state, action: PayloadAction<string>) => {
      state.template.nameFontSize = action.payload;
    },
    setBodyFontSize: (state, action: PayloadAction<string>) => {
      state.template.bodyFontSize = action.payload;
    },
    setOtherFontSize: (state, action: PayloadAction<string>) => {
      state.template.otherFontSize = action.payload;
    },
    setCarouselInclude: (state, action: PayloadAction<boolean>) => {
      state.template.carouselInclude = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductState>) => {
      state.products.push(action.payload);
    },
    setProject: (state, action: PayloadAction<ProjectState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveProject.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const {
  addProduct,
  setCarouselInclude,
  setOtherFontSize,
  setBodyFontSize,
  setNameFontSize,
  setBodyFontFamily,
  setNameFontFamily,
  setBodyFontColor,
  setSecondaryColor,
  setPrimaryColor,
  setBannerUrl,
  setLocation,
  setAddress,
  setPublished,
  setTwitterURL,
  setInstagramURL,
  setFacebookURL,
  setCurrency,
  setCategory,
  setPhoneNumber,
  setDescription,
  setProject,
  setName,
} = ProjectSlice.actions;

export default ProjectSlice.reducer;
