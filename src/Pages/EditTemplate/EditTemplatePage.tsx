import FloatingButton from "../../Templates/Ecommerce/Components/FloatingButton"
import EcommerceHome from "../../Templates/Ecommerce/Pages/EcommerceHome";

export const EditTemplatePage: React.FC = () => {
    const template = localStorage.getItem('clickedTemplate');
    console.log(template)
    return (
        <div>
            <div>
            <EcommerceHome />
                {/* {template === 'Finance1' ? <Finance /> : '' }
                {template === 'Ecommerce1' ? <EcommerceHome /> : ''} */}
            </div>
            <FloatingButton />
        </div>
        
    )
}