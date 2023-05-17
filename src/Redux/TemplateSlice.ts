import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TemplateState {
  templateName: string;
  primaryColor: string;
  secondaryColor: string;
  nameFont: string;
  bodyFont: string;
}

const initialState: TemplateState = {
  templateName: '',
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  nameFont: 'Arial, sans-serif',
  bodyFont: 'Helvetica, sans-serif',
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
  setHeadingFont,
  setBodyFont,
} = templateSlice.actions;

export default templateSlice.reducer;
