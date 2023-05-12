import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProjectPage } from './ProjectPage';
import { TemplatesPage } from './TemplatesPage';

const ProjectsAndTemplates:React.FC = () => {
  return (
    <div>
        <Routes>
            <Route index element={<ProjectPage />} />
            <Route path="templates" element={<TemplatesPage />}/>
        </Routes>
    </div>
  )
}

export default ProjectsAndTemplates