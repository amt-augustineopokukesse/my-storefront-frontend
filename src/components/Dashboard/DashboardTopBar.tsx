import { HeaderText } from "../HeaderText"
import { MerchantProfile } from "./MerchantProfile"
import '../assets/styles/dashboardStyels/DashboardTopBar.scss'

export const DashboardTopBar: React.FC = () => {
    return (
        <div className="dashboard-top-bar">
            <MerchantProfile />
            <HeaderText />
        </div>
    )
}