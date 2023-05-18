import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
  productName: string;
  description: string;
  price: number;
  image: string;
  discount: number;
  initialStock: number;
  stockAvailable: number;
  sku: string;
  createdAt: number;
  updatedAt: number;
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

const initialProductState: ProductState = {
  productName: '',
  description: '',
  price: 0,
  image: '',
  discount: 0,
  initialStock: 0,
  stockAvailable: 0,
  sku: 'carton',
  createdAt: Date.now(),
  updatedAt: Date.now(),
}

const initialState: ProjectState = {
  name: 'Lorem Emporium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.',
  phoneNumber: '',
  category: 'Ecommerce',
  currency: 'GHC',
  facebookURL: '',
  instagramURL: '',
  twitterURL: '',
  published: false,
  address: '',
  location: '',
  bannerUrl: '',
  template: {
    primaryColor: "#15616B",
    secondaryColor: '#ffffff',
    bodyFontColor: '#222222',
    nameFontFamily: 'Poppins, sans-serif',
    bodyFontFamily: 'Roboto, sans-serif',
    nameFontSize: '30px',
    bodyFontSize: '14px',
    otherFontSize: '20px',
    carouselInclude: true,
  },
  products: [initialProductState],
};

const ProjectSlice = createSlice({
  name: 'project',
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
    setProducts: (state, action: PayloadAction<ProductState>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const {
  setProducts,
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
