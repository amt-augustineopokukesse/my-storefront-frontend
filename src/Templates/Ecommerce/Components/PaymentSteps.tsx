import '../../../assets/styles/templatesStyles/Ecommerce/PaymentSteps.scss'

export const PaymenySteps: React.FC = () => {
    return (
        <div className="payment-steps-div">
            <span className='step'>
                <span className='step-circle'>
                    <h4>1</h4>
                </span>
                <p>Checkout</p>
            </span>

            <span className='step'>
                <span className='step-circle'>
                    <h4>2</h4>
                </span>
                <p>Pay</p>
            </span>

            <span className='step'>
                <span className='step-circle'>
                    <h4>3</h4>
                </span>
                <p>Delivery</p>
            </span>
        </div>
    )
}