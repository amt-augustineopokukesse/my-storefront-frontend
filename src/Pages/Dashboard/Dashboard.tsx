import { DashboardTopBar } from "../../components/Dashboard/DashboardTopBar"
import { DashboardSideBar } from "../../components/Dashboard/DashboardSideBar"
import { DashboardPages } from "./DashboardPages"
//import { BrowserRouter as Router } from "react-router-dom"
import '../../assets/styles/dashboardStyles/Dashboard.scss';


export const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            {/* <Router > */}
                <DashboardTopBar />
                <div className="sidebar-pages-conatiner">
                    <DashboardSideBar />
                    <div className="pages-container">
                        <DashboardPages />
                    </div>
                </div>
               
                
            {/* </Router> */}
            
        </div>
        
    )
}