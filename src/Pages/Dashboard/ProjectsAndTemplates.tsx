import { Route, Routes } from "react-router-dom";
import { ProjectPage } from "./ProjectPage";
import { TemplatesPage } from "./TemplatesPage";

const ProjectsAndTemplates: React.FC = () => {
    return (
                <Routes>
                   <Route index element={<ProjectPage />} />
                   <Route path="templates" element={<TemplatesPage />}/>
                </Routes>
            
    )
}

export default ProjectsAndTemplates;