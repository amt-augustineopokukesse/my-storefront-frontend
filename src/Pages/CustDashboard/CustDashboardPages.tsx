import { Route, Routes } from "react-router-dom";
import { CustDashboardPage } from "./CustDashboardPage";
import { CustProfilePage } from "./CustProfilePage";
import { CustSupportPage } from "./CustSupportPage";
import '../../assets/styles/dashboardStyles/DashboardPages.scss';

export const CustDashboardPages: React.FC = () => {
    return (
        <div className="dashboard-pages">
                <Routes>
                   <Route index element={<CustDashboardPage />} />
                   <Route path="profile" element={<CustProfilePage />} />
                   <Route path="support" element={<CustSupportPage />} /> 
                </Routes>
        </div>
            
    )
}