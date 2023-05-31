import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {
  ProductState,
  ProjectState,
  initialProjectState,
} from "./ProjectInitialState";
import api from "./axiosClient";


const getBusinessId = async () => {
  const merchant = localStorage.getItem("merchant");

  if (merchant) {
    const mX = JSON.parse(merchant);
    return mX.business.id;
  } else return "";
};

const getProjectId = async () => {
  const project = localStorage.getItem("project");

  if (project) {
    const pX = JSON.parse(project);
    return pX.id;
  } else return "";
};

// handle Get All Stores
export const getStores = createAsyncThunk("project/getStores", async () => {
  try {
    const business_id = await getBusinessId();
    const response = await api.get(`/project/all/${business_id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return error.response.data.message;
      }
    }
    return "An error occurred";
  }
});

// handle GetAll Published Stores
export const getPublishedStores = createAsyncThunk(
  "project/getPublishedstores",
  async () => {
    try {
      const response = await api.get("/market/stores");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return "An error occurred";
    }
  }
);

// handleSave
export const saveProject = createAsyncThunk(
  "project/saveProject",
  async (project: ProjectState) => {
    try {
      const response = await api.post("/project/new", {
        business_id: await getBusinessId(),
        ...project,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return "An error occurred";
    }
  }
);

// handleUpdate
export const updateProject = createAsyncThunk(
  "project/updateProject",
  async (project: ProjectState) => {
    try {
      const { template, ...values } = project;
      const response = await api.put("/project/update", {
        project_id: await getProjectId(),
        template: template,
        ...values,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return "An error occurred";
    }
  }
);

/**Add to store view count */
export const addToViewCount = createAsyncThunk(
  "project/addViews",
  async (id: string) => {
    try {
      const response = await api.put("/market/store/views", { storeId: id });
      return response;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
      return "An error occurred";
    }
  }
);

// handlePublish
export const publishProject = createAsyncThunk(
  "project/publishProject",
  async () => {
    try {
      const response = await api.put("/project/publish", {
        project_id: await getProjectId(),
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return error.response.data.message;
        }
      }
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
