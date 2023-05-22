import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface TemplateState{
    selectedTemplate: string
}

const initialState: TemplateState = {
    selectedTemplate: ''
}

const selectedTemplateSlice = createSlice({
    name: 'selectedTemplate',
    initialState,
    reducers: {
        setSelectedTemplate: (state, action: PayloadAction<string>) => {
            state.selectedTemplate = action.payload;
          }
    }
})
export const { setSelectedTemplate } = selectedTemplateSlice.actions; 

export default selectedTemplateSlice.reducer;