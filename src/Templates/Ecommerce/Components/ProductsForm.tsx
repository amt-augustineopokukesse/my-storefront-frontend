import React from 'react';
import { ProjectState } from '../../../Redux/ProjectSlice';

const ProductsForm: React.FC<{ project: ProjectState }> = ({ project }) => {
  return (
    <div>
        <form className="form">
        
        <div className='input-containers'>
          <label className="label">Store Name:</label>
          <input
            type="text"
            value={project.name}
            //onChange={}
            className="input"
          />
        </div>
        </form>
    </div>
  )
}

export default ProductsForm;