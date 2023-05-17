import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TemplateState {
  templateName: string;
  primaryColor: string;
  secondaryColor: string;
  bodyFontColor: string;
  nameFont: string;
  bodyFont: string;
}

const initialState: TemplateState = {
  templateName: '',
  primaryColor: '#15616B',
  secondaryColor: '#ffffff',
  bodyFontColor: '#222222',
  nameFont: 'Poppins, sans-serif',
  bodyFont: 'Roboto, sans-serif',
};

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setTemplateName: (state, action: PayloadAction<string>) => {
      state.templateName = action.payload;
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
  },
});

export const {
  setTemplateName,
  setPrimaryColor,
  setSecondaryColor,
  setBodyFontColor,
  setHeadingFont,
  setBodyFont,
} = templateSlice.actions;

export default templateSlice.reducer;
