import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store';
import { makePayment } from '../../../Redux/Payment/PaymentSlice';
import '../../../assets/styles/templatesStyles/Ecommerce/Payment.scss';
import { PaymentDetails, initialPaymentState } from '../../../Redux/Payment/PaymentInitialState';
import { toast } from 'react-toastify';
import { setProject } from '../../../Redux/Templates/ProjectSlice';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { useNavigate } from 'react-router-dom';
import NoSearchNavbar from '../Components/NoSearchNavbar';

const Payment: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
    }
  }, [dispatch]);

  //const paymentDetails = useAppSelector((state) => state.payment.paymentDetails);
  const orderDetails = useAppSelector((state) => state.payment.orderDetails);
  const products = useAppSelector((state) => state.cart.products);
  const project = useAppSelector((state) => state.project);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);

  const itemCount = products.length;
  const totalAmount = products.reduce((total, product) => total + (product.price * product.quantity), 0);
  const currency = project.currency;
  const totalOrders = products.reduce((total, product) => total + product.quantity, 0);

  

  const [isButtonClickable, setIsButtonClickable] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentDetails>({
    ...initialPaymentState,
    cardNumber: orderDetails.associated_account_number || '',
    accountHolder: orderDetails.shipping_reciepient_names || '',

  });
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'expiryDate') {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const formattedDate = `${year}-${month}`;
        setPaymentInfo((prevPaymentInfo) => ({
        ...prevPaymentInfo,
        [name]: formattedDate,
        }));
    } else {
        setPaymentInfo((prevPaymentInfo) => ({
        ...prevPaymentInfo,
        [name]: value,
        }));
    }
    checkButtonClickable(paymentInfo);
  };

  const checkButtonClickable = (updatedPaymentDetails: PaymentDetails) => {
    const {
      bank,
      accountHolder,
      branch,
      cardNumber,
      cvc,
      expiryDate,
    } = updatedPaymentDetails;
    const isAllFieldsFilled =
      bank !== '' &&
      accountHolder !== '' &&
      branch !== '' &&
      cardNumber !== '' &&
      cvc !== '' &&
      expiryDate !== '';

    setIsButtonClickable(isAllFieldsFilled);
  };

  const handlePayButtonClick = async () => {
    if (isButtonClickable === false) {
        toast.warn('Payment field cannot be left empty');
    }else {
        try {
            const response = await dispatch(makePayment(paymentInfo));
            if (response && response.payload) {
              toast.success('Payment made successfully. Kindly await confirmation in your mail');
              navigate('/receipt');
            }
        } catch (error) {
            toast.error('Sorry, could not process payment at this time');
        }
    }
  };

  return (
    <>
      <NoSearchNavbar />

      <div className="payment-main-div">
        <h3 className="header">Make Payment</h3>
        <div className="content-container">
          <div className="payment-panel panel1" tabIndex={0}>
            <div className="visa-form-container">
              <span className="section">
                <span className="input-span">
                  <h4>Bank</h4>
                  <input
                    type="text"
                    name="bank"
                    value={paymentInfo.bank}
                    onChange={handleInputChange}
                    required
                  />
                </span>
                <span className="input-span">
                  <h4>Account Holder</h4>
                  <input
                    type="text"
                    name="accountHolder"
                    value={paymentInfo.accountHolder}
                    onChange={handleInputChange}
                    required
                  />
                </span>
              </span>
              <span className="section">
                <span className="input-span">
                  <h4>Branch</h4>
                  <input
                    type="text"
                    name="branch"
                    value={paymentInfo.branch}
                    onChange={handleInputChange}
                    required
                  />
                </span>
                <span className="input-span">
                  <h4>Card Number</h4>
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentInfo.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </span>
              </span>
              <span className="section">
                <span className="input-span">
                  <h4>CVC</h4>
                  <input
                    type="text"
                    name="cvc"
                    value={paymentInfo.cvc}
                    onChange={handleInputChange}
                    required
                  />
                </span>
                <span className="input-span">
                  <h4>Expiry Date</h4>
                  <input
                    type="month"
                    name="expiryDate"
                    value={paymentInfo.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </span>
              </span>
              <span></span>
            </div>
          </div>
          <div className="summary-div">
            <h4>summary</h4>
            <span className="list">
              <span className="list-item">
                <p>Items</p>
                <p>{itemCount}</p>
              </span>
              <span className="list-item">
                <p>Total Orders</p>
                <p>{totalOrders}</p>
              </span>
              <span className="list-item">
                <p>Payment Method</p>
                <p>Visa</p>
              </span>
              <span className="list-item">
                <p>Amount</p>
                <p>{currency} {totalAmount.toLocaleString()}</p>
              </span>
            </span>
          </div>
        </div>
        <button
          className="pay-button"
          onClick={handlePayButtonClick}
          disabled={!isButtonClickable}
        >
          Pay
        </button>
      </div>
    </>
  );
};

export default Payment;
