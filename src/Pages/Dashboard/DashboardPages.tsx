import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "./DashboardPage";
import { ProfilePage } from "./ProfilePage";
import { SupportPage } from "./SupportPage";
import '../../assets/styles/dashboardStyles/DashboardPages.scss';
import ProjectsAndTemplates from "./ProjectsAndTemplates";

export const DashboardPages: React.FC = () => {
    const userInit = {
        profile_picture: "",
        business_name: "",
        email: "",
    }
    return (
        <div className="dashboard-pages">
                <Routes>
                   <Route index element={<DashboardPage />} />
                   <Route path="/project/*" element={<ProjectsAndTemplates />} />
                   <Route path="profile" element={<ProfilePage user={userInit} editForm={{
                    value: "",
                    editmode: false
                    }} />} />
                   <Route path="support" element={<SupportPage />} /> 
                </Routes>
        </div>
            
    )
}

