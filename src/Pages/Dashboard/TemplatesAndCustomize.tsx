import { Route, Routes } from "react-router-dom";
import { TemplatesPage } from "./TemplatesPage";
import EcommerceHome from "../../Templates/Ecommerce/Pages/EcommerceHome";

const TemplatesAndCustomize: React.FC = () => {
    return (
                <Routes>
                   <Route index element={<TemplatesPage />} />
                   <Route path="/ecommerce" element={<EcommerceHome />}/>
                </Routes>
            
    )
}

export default TemplatesAndCustomize;