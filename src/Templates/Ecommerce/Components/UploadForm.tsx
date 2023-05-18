import React from 'react';
import { TemplateState } from '../../../Redux/TemplateSlice';

const UploadForm: React.FC<{ template: TemplateState }> = ({ template }) => {
  return (
    <div>
        <form className="form">
        
        <div className='input-containers'>
          <label className="label">Body Font Color:</label>
          <input
            type="color"
            value={template.colors.bodyFontColor}
            //onChange={handleBodyFontColorChange}
            className="color-input"
          />
        </div>
        </form>
    </div>
  )
}

export default UploadForm;