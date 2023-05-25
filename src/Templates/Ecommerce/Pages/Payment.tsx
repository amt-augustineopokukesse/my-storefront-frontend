import '../../../assets/styles/templatesStyles/Ecommerce/Payment.scss'
import { PaymenySteps } from '../Components/PaymentSteps'
import 'react-tabs/style/react-tabs.scss';
import visaActivelogo from '../../../assets/images/visa-payment-active.png'
import visalogo from '../../../assets/images/visa-payment.png'
import mobileActivelogo from '../../../assets/images/mobile-payment-active.png'
import mobilelogo from '../../../assets/images/mobile-payment.png'
import { useState } from 'react';
import { VisaPayment } from '../Components/VisaPayment';
import { MobileMoneyPayment } from '../Components/MobileMoneyPayment';


export const Payment: React.FC = () => {
    const [activeTab, SetActiveTab] = useState('tab1');

   const handleTabs = (event: React.MouseEvent) => {
    SetActiveTab(event.currentTarget.id);
   }

    return (
        <div className="payment-main-div">
           <PaymenySteps />
            <h3 className='header'>Payment Method</h3>
           <div className="tab-container">
                <div className="tab-list">
                    <button className={activeTab === 'tab1' ?  'tab active-tab' : 'tab'} id='tab1' onClick={handleTabs}>
                        <img src={activeTab === 'tab1' ? visaActivelogo : visalogo} alt="" />
                        Visa
                    </button>
                    <button className={activeTab === 'tab2' ?  'tab active-tab' : 'tab'} id='tab2' onClick={handleTabs}>
                        <img src={activeTab === 'tab2' ? mobileActivelogo: mobilelogo} alt="" />
                        Mobile money
                    </button>
                </div>
                <div className="tab-panel panel1" tabIndex={0}>
                    { activeTab === 'tab1' ? <VisaPayment /> : <MobileMoneyPayment/>}
                </div>
                <div className='summary-div'>
                    <h4>summary</h4>
                    <span className='list'>
                        <span className='list-item'>
                            <p>Items</p>
                            <p>1</p>
                        </span>
                        <span className='list-item'>
                            <p>Payment Method</p>
                            <p>{activeTab === 'tab1' ? 'Visa' : 'Mobile Money'}</p>
                        </span>
                        <span className='list-item'>
                            <p>Amount</p>
                            <p>GHC</p>
                        </span>
                    </span>
                </div>
           </div>
           <button className='pay-button'>Pay</button>
        </div>
    )
}