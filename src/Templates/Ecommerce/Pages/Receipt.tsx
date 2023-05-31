import React, { useEffect } from 'react';
import '../../../assets/styles/templatesStyles/Ecommerce/Receipt.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { applyTemplateCustomizations } from '../Components/ProductEditUtils';
import { setProject } from '../../../Redux/Templates/ProjectSlice';
import carIcon from '../../../assets/images/Templates/Ecommerce/car.png';
import { useNavigate } from 'react-router-dom';
import NoSearchNavbar from '../Components/NoSearchNavbar';

const Receipt:React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedProject = localStorage.getItem('project');
    if (storedProject) {
      const savedProject = JSON.parse(storedProject);
      dispatch(setProject(savedProject));
    }
  }, [dispatch]);

  const project = useAppSelector((state) => state.project);
  const orderDetails = useAppSelector((state) => state.payment.orderDetails);

  useEffect(() => {
    applyTemplateCustomizations(project);
  }, [project]);
 
  const handleDashboardButton = () => {
    navigate('/custdashboard');
    //window.location.href = '/custdashboard';
  };

  return (
    <>
      <NoSearchNavbar />
      <section className="container">
        <h2 className="container-header">Transaction Completed</h2>
        <div className='receipt'>
          <div className='image-div'>
            <img src={carIcon} alt="" />
            <p>Almost there</p>
          </div>
          <div className="shipping-info">
            <p className='delivery-text'>Delivered to</p>
            <div className="information">
              <div className="name-and-number">
                <h2>{orderDetails.shipping_reciepient_names}</h2>
                <p>{orderDetails.shipping_reciepient_contacts}</p>
              </div>
              <div className="address">
                <p>{orderDetails.shipping_reciepient_address}</p>
                <p>{orderDetails.pickupMode}</p>
              </div>
            </div>
        </div>
        </div>
          <button className='dashboard-button' onClick={handleDashboardButton}>
            Return to Dashboard
          </button>
      </section>
    </>
  );
};

export default Receipt;
