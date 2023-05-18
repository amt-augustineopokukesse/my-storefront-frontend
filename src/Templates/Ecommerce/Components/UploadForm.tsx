import React from 'react';
import { ProjectState } from '../../../Redux/ProjectSlice';

const UploadForm: React.FC<{ project: ProjectState }> = ({ project }) => {
  return (
    <div>
        <form className="form">
        
        <div className='input-containers'>
          <label className="label">Body Font Color:</label>
          <input
            type="color"
            value={project.template.bodyFontColor}
            // onChange={handleBodyFontColorChange}
            className="color-input"
          />
        </div>
        </form>
    </div>
  )
}

export default UploadForm;