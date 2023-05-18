import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TemplateState {
  name: string,
  description: string,
  colors: {
    primary: string;
    secondary: string;
    bodyFontColor: string;
  },
  fonts: {
    nameFont: string;
    bodyFont: string;
  }
  
}

const initialState: TemplateState = {
  name: 'Lorem Emporium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.',
  colors: {
    primary: '#15616B',
    secondary: '#ffffff',
    bodyFontColor: '#222222',
  },
  fonts: {
    nameFont: 'Poppins, sans-serif',
    bodyFont: 'Roboto, sans-serif',
  }
  
  
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
      state.colors.primary = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.colors.secondary = action.payload;
    },
    setBodyFontColor: (state, action: PayloadAction<string>) => {
      state.colors.bodyFontColor = action.payload;
    },
    setHeadingFont: (state, action: PayloadAction<string>) => {
      state.fonts.nameFont = action.payload;
    },
    setBodyFont: (state, action: PayloadAction<string>) => {
      state.fonts.bodyFont = action.payload;
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
} = templateSlice.actions;

export default templateSlice.reducer;
