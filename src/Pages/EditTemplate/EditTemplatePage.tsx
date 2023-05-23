import FloatingButton from "../../Templates/Ecommerce/Components/FloatingButton"
import EcommerceHome from "../../Templates/Ecommerce/Pages/EcommerceHome";
import { Finance } from "../../Templates/Finance/Pages/Finance";
import { useAppSelector } from "../../store"

export const EditTemplatePage: React.FC = () => {
    const template = localStorage.getItem('clickedTemplate');
    console.log(template)
    return (
        <div>
            <div>
                {template === 'Finance1' ? <Finance /> : '' }
                {template === 'Ecommerce1' ? <EcommerceHome /> : ''}
            </div>
            <FloatingButton />
        </div>
        
    )
}