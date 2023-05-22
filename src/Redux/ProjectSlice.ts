import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import image from "../assets/images/Templates/Ecommerce/heroBackground.png";
import { AxiosError } from "axios";
import api from "./Authentication/axiosClient";

export interface ProductState {
  productName?: string;
  category?: string;
  unit?: string;
  description?: string;
  price?: number;
  image?: string;
  discount?: number;
  initialStock?: number;
  sku?: string;
}

export interface ProjectState {
  name: string;
  description: string;
  phoneNumber: string;
  category: string;
  currency: string;
  facebookURL: string;
  instagramURL: string;
  twitterURL: string;
  published: boolean;
  address: string;
  location: string;
  bannerUrl: string;
  template: {
    primaryColor: string;
    secondaryColor: string;
    bodyFontColor: string;
    nameFontFamily: string;
    bodyFontFamily: string;
    nameFontSize: string;
    bodyFontSize: string;
    otherFontSize: string;
    carouselInclude: boolean;
  };
  products: ProductState[];
}

const getBusinessId = async() => {
  const merchant = localStorage.getItem("merchant") || ""; 
  let parsedId = null;
  let id = null;

  try {
    parsedId = JSON.parse(merchant); 

    
    if (parsedId && parsedId.business && parsedId.business.id) {
      id = parsedId.business.id; 
      return id
    } else {
      
      console.error("Invalid JSON structure");
    }
  } catch (error) {
    // Handle the case where JSON parsing fails
    console.error("Error parsing JSON:", error);
  }
};
const business_id = getBusinessId();


const initialState: ProjectState ={
  name: "Lorem Emporium",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.",
  phoneNumber: "024 12 345 6789",
  category: "Ecommerce",
  currency: "GHC",
  facebookURL: "",
  instagramURL: "",
  twitterURL: "",
  published: false,
  address: "Add your Address",
  location: "Add your location",
  bannerUrl: image,
  template: {
    primaryColor: "#15616B",
    secondaryColor: "#ffffff",
    bodyFontColor: "#222222",
    nameFontFamily: "Poppins, sans-serif",
    bodyFontFamily: "Roboto, sans-serif",
    nameFontSize: "96px",
    bodyFontSize: "24px",
    otherFontSize: "40px",
    carouselInclude: true,
  },
  products: [],
};

export const saveProject =  createAsyncThunk(
  "project/saveProject",
  async (project: ProjectState) => {
    try {
      // const response = await axios.post(`${API_BASE_URL}/project/new/${{/**add user id */}}`,
      //   {
      //     business_id: `${{/**add business id */}}`,
      //     ...project
      //   }
      // );
      const response = await api.post("/project/new", {
        business_id,
        ...project,
      });
      console.log(response.data);
      // return response.data;
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
  initialState,
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
  setName,
} = ProjectSlice.actions;

export default ProjectSlice.reducer;
