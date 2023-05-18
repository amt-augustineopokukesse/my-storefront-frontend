import React from "react";
import { TemplateState } from "../../../Redux/TemplateSlice";
import {
    setPrimaryColor,
    setSecondaryColor,
    setHeadingFont,
    setBodyFont,
    setBodyFontColor,
  } from '../../../Redux/TemplateSlice';
import { useAppDispatch } from "../../../store";

export const StylingForm: React.FC<{ template: TemplateState }> = ({ template }) => {
    // const { template } = props;
    const dispatch = useAppDispatch();

    
    
      const handlePrimaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPrimaryColor(e.target.value));
      };
    
      const handleSecondaryColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecondaryColor(e.target.value));
      };
    
      const handleBodyFontColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBodyFontColor(e.target.value));
      };
    
      const handleHeadingFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setHeadingFont(e.target.value));
      };
    
      const handleBodyFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setBodyFont(e.target.value));
      };
    return (
        <form className="form">
        <div className='input-containers'>
          <label className="label">Primary Color:</label>
          <input
            type="color"
            value={template.primaryColor}
            onChange={handlePrimaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Secondary Color:</label>
          <input
            type="color"
            value={template.secondaryColor}
            onChange={handleSecondaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Body Font Color:</label>
          <input
            type="color"
            value={template.bodyFontColor}
            onChange={handleBodyFontColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Name Font:</label>
          <select
            value={template.nameFont}
            onChange={handleHeadingFontChange}
            className="select"
          >
            <option value="Poppins, sans-serif">Poppins</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            {/* Add more font options as needed */}
          </select>
        </div>
        <div className='input-containers'>
          <label className="label">Body Font:</label>
          <select
            value={template.bodyFont}
            onChange={handleBodyFontChange}
            className="select"
          >
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Helvetica, sans-serif">Helvetica</option>
            <option value="Times New Roman, serif">Times New Roman</option>
            {/* Add more font options as needed */}
          </select>
        </div>        
      </form>
    )
}