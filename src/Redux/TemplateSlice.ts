import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TemplateState {
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  bodyFontColor: string;
  nameFont: string;
  bodyFont: string;
  phoneNumber: string;
  templateCategory: string;
  currency: string;
  facebookURL: string;
  instagramURL: string;
  twitterURL: string;
}

const initialState: TemplateState = {
  name: 'Lorem Emporium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.',
  primaryColor: '#15616B',
  secondaryColor: '#ffffff',
  bodyFontColor: '#222222',
  nameFont: 'Poppins, sans-serif',
  bodyFont: 'Roboto, sans-serif',
  phoneNumber: '',
  templateCategory: 'Ecommerce',
  currency: 'Ghanaian Cedi',
  facebookURL: '',
  instagramURL: '',
  twitterURL: '',
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setTemplateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    setBodyFontColor: (state, action: PayloadAction<string>) => {
      state.bodyFontColor = action.payload;
    },
    setHeadingFont: (state, action: PayloadAction<string>) => {
      state.nameFont = action.payload;
    },
    setBodyFont: (state, action: PayloadAction<string>) => {
      state.bodyFont = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setTemplateCategory: (state, action: PayloadAction<string>) => {
      state.templateCategory = action.payload;
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
  },
});

export const {
  setTemplateName,
  setTemplateDescription,
  setPrimaryColor,
  setSecondaryColor,
  setBodyFontColor,
  setHeadingFont,
  setBodyFont,
  setPhoneNumber,
  setTemplateCategory,
  setCurrency,
  setFacebookURL,
  setInstagramURL,
  setTwitterURL,
} = templateSlice.actions;

export default templateSlice.reducer;
