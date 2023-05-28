import '../../../assets/styles/templatesStyles/Ecommerce/PaymentSteps.scss'

export const PaymentSteps: React.FC = () => {
    return (
        <div className="payment-steps-div">
            <span className='step'>
                <span className='step-circle circle1'>
                    <h4>1</h4>
                </span>
                <span className='step1-bar'></span>
                <p className='step1-text'>Checkout</p>
            </span>

            <span className='step'>
            <span className='step2-barA'></span>
                <span className='step-circle circle2'>
                    <h4>2</h4>
                </span>
                <span className='step2-barB'></span>
                <p className='step2-text'>Pay</p>
            </span>

            <span className='step'>
            <span className='step3-bar'></span>
                <span className='step-circle circle3'>
                    <h4>3</h4>
                </span>
                <p className='step3-text'>Delivery</p>
            </span>
        </div>
    )
}