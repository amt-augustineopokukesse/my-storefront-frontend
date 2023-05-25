import '../../../assets/styles/templatesStyles/Ecommerce/VisaPayment.scss'

export const VisaPayment: React.FC = () => {
    return (
        <div className="visa-form-container">
            <span className="section">
                <span className="input-span">
                    <h4>Bank</h4>
                    <input type="text" />
                </span>
                <span className='input-span'>
                    <h4>Account Holder</h4>
                    <input type="text" />
                </span>
            </span>
            <span className="section">
                <span className='input-span'>
                    <h4>Branch</h4>
                    <input type="text" />
                </span>
                <span className='input-span'>
                    <h4>Card Number</h4>
                    <input type="text" />
                </span>
            </span>
            <span className="section">
                <span className='input-span'>
                    <h4>CVC</h4>
                    <input type="text" />
                </span>
                <span className='input-span'>
                    <h4>Expiry Date</h4>
                    <input type="month"/>
                </span>
            </span>
            <span>
            </span>
        </div>
    )
}