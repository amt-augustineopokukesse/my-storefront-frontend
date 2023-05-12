import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./DashboardPage";
import { ProfilePage } from "./ProfilePage";
//import { ProjectPage } from "./ProjectPage";
import { SupportPage } from "./SupportPage";
import '../../assets/styles/dashboardStyles/DashboardPages.scss';
import ProjectsAndTemplates from "./ProjectsAndTemplates";
//import { TemplatesPage } from "./TemplatesPage";

export const DashboardPages: React.FC = () => {
    return (
        <div className="dashboard-pages">
                <Routes>
                   <Route index element={<DashboardPage />} />
                   <Route path="/project/*" element={<ProjectsAndTemplates />} />
                   <Route path="profile" element={<ProfilePage />} />
                   <Route path="support" element={<SupportPage />} /> 
                </Routes>
        </div>
            
    )
}