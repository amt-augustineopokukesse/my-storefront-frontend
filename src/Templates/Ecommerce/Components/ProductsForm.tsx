import React from 'react';
import { TemplateState } from '../../../Redux/TemplateSlice';

const ProductsForm: React.FC<{ template: TemplateState }> = ({ template }) => {
  return (
    <div>
        <form className="form">
        
        <div className='input-containers'>
          <label className="label">Store Name:</label>
          <input
            type="text"
            value={template.name}
            //onChange={}
            className="input"
          />
        </div>
        </form>
    </div>
  )
}

export default ProductsForm;