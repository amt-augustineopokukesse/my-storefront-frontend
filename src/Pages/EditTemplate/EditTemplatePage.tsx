import FloatingButton from "../../Templates/Ecommerce/Components/FloatingButton"
import EcommerceHome from "../../Templates/Ecommerce/Pages/EcommerceHome";
import { Finance } from "../../Templates/Finance/Pages/Finance";
import { useAppSelector } from "../../store"

export const EditTemplatePage: React.FC = () => {
    const template = useAppSelector(state => state.template);
    console.log(template)
    return (
        <div>
            <div>
                {template.selectedTemplate === 'Finance1' ? <Finance /> : '' }
                {template.selectedTemplate === 'Ecommerce2' ? <EcommerceHome /> : ''}
            </div>
            <FloatingButton />
        </div>
        
    )
}