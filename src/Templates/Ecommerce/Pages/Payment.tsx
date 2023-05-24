import '../../../assets/styles/templatesStyles/Ecommerce/Payment.scss'
import { PaymenySteps } from '../Components/PaymentSteps'
export const Payment: React.FC = () => {
    return (
        <div className="payment-container">
           <PaymenySteps />
        </div>
    )
}