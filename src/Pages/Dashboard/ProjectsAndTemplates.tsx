import { Route, Routes } from "react-router-dom";
import { ProjectPage } from "./ProjectPage";
// import { TemplatesPage } from "./TemplatesPage";
import TemplatesAndCustomize from "./TemplatesAndCustomize";

const ProjectsAndTemplates: React.FC = () => {
    return (
                <Routes>
                   <Route index element={<ProjectPage />} />
                   <Route path="templates/*" element={<TemplatesAndCustomize />}/>
                </Routes>
            
    )
}

export default ProjectsAndTemplates;