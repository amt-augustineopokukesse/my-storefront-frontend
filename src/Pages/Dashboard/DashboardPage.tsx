import '../../assets/styles/dashboardStyles/DashboardPage.scss'

export const DashboardPage: React.FC = () => {
    return (
        <div className='dashboard-page'>
            <div className='top-containers'>
                <div className='site-created-div block-view'>
                    <h3>Sites Created</h3>
                    <p>2</p>

                </div>
                <div className='views-div block-view'>
                    <h3>Views</h3>
                    <p>8993</p>
                </div>
                <div className='order-div block-view'>
                    <h3>Orders</h3>
                    <p>433</p>
                </div>
                <div className="earnings-div block-view">
                    <h3>Earnings</h3>
                    <p>GH<span>&#8373;</span>4303.00</p>
                </div>
            </div>
            <div className="grid-container">
                  <h3 className='grid-header'>Vendors</h3>  
            </div>
        </div>
    )
}