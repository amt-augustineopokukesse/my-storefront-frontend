import '../../assets/styles/custDashboardStyles/CustDashboardPage.scss'

export const CustDashboardPage: React.FC = () => {
    return (
        <div className='dashboard-page'>
            <div className='top-containers'>
                <div className='site-created-div block-view'>
                    <h3>Orders</h3>
                    <p>0</p>

                </div>
                <div className='views-div block-view'>
                    <h3>Items in Cart</h3>
                    <p>0</p>
                </div>
                <div className='order-div block-view'>
                    <h3>Recent Purchases</h3>
                    <p>0</p>
                </div>
                <div className="earnings-div block-view">
                    <h3>Expneses</h3>
                    <p>GH &#8373; 0.00</p>
                </div>
            </div>
            <div className="grid-container">
                  <h3 className='grid-header'></h3>  
            </div>
        </div>
    )
}