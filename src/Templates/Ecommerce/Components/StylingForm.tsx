import React from "react";
import { ProjectState } from "../../../Redux/ProjectSlice";
import {
  setSecondaryColor,
  setPrimaryColor,
  setBodyFontColor,
  setBodyFontFamily,
  setNameFontFamily,
  } from '../../../Redux/ProjectSlice';
import { useAppDispatch } from "../../../store";

export const StylingForm: React.FC<{ project: ProjectState }> = ({ project }) => {
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
        dispatch(setNameFontFamily(e.target.value));
      };
    
      const handleBodyFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setBodyFontFamily(e.target.value));
      };
    return (
        <form className="form">
        <div className='input-containers'>
          <label className="label">Primary Color:</label>
          <input
            type="color"
            value={project.template.primaryColor}
            onChange={handlePrimaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Secondary Color:</label>
          <input
            type="color"
            value={project.template.secondaryColor}
            onChange={handleSecondaryColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Body Font Color:</label>
          <input
            type="color"
            value={project.template.bodyFontColor}
            onChange={handleBodyFontColorChange}
            className="color-input"
          />
        </div>
        <div className='input-containers'>
          <label className="label">Name Font:</label>
          <select
            value={project.template.nameFontFamily}
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
            value={project.template.bodyFontFamily}
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