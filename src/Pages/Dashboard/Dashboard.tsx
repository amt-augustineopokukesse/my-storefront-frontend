import { DashboardTopBar } from "../../components/Dashboard/DashboardTopBar"
import { DashboardSideBar } from "../../components/Dashboard/DashboardSideBar"
import { DashboardPages } from "./DashboardPages"
import { useAppSelector } from "../../store";
//import { BrowserRouter as Router } from "react-router-dom"
import '../../assets/styles/dashboardStyles/Dashboard.scss';




export const Dashboard: React.FC = () => {
    const userData : any = useAppSelector((state) => state.auth.auth.user);
    console.log(userData);
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