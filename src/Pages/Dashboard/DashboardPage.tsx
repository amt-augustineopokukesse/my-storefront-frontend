//import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/DashboardPage.scss'
import { useAppSelector } from '../../store';


export const DashboardPage: React.FC = () => {

    const user = useAppSelector(state => state.auth.auth.user);
    console.log(user)
    // useEffect(() => {
        
    // }, [])

    return (
        <div className='dashboard-page'>
            <div className='top-containers'>
                <div className='site-created-div block-view'>
                    <h3>Sites Created</h3>
                    <p>0</p>

                </div>
                <div className='views-div block-view'>
                    <h3>Views</h3>
                    <p>0</p>
                </div>
                <div className='order-div block-view'>
                    <h3>Orders</h3>
                    <p>0</p>
                </div>
                <div className="earnings-div block-view">
                    <h3>Earnings</h3>
                    <p>GH &#8373; 0.00</p>
                </div>
            </div>
            <div className="grid-container">
                  <h3 className='grid-header'></h3>  
            </div>
        </div>
    )
}