import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/DashboardPage.scss'
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { getStores } from '../../Redux/ProjectSlice';
import { AuthLoader } from '../../components/authComponents/AuthLoader';

type store = {
    [key: string]: any;
}

export const DashboardPage: React.FC<store> = (props) => {

    const { allStores } = props;
    const [ stores, setStores ] = useState(allStores);
    const [loader, setLoader] = useState<boolean>(false);


    const dispatch = useAppDispatch();

    const getAllStores = async () => {
        try {
            const response = await dispatch(getStores());
            if (response) {
                console.log(response.payload.data);
                setStores(response.payload.data)
                setTimeout(()=>{
                    setLoader(false);
                }, 500)
            }
        } catch (error) {
            setLoader(false);
            // console.log(error)
            toast.error("Error Retrieving Storefront Stores")
            return;
        }
    }
    useEffect(() => {
        setLoader(true);
        getAllStores();
    },[]);



    return (
        <div className='dashboard-page'>
            <div className='top-containers'>
                <div className='site-created-div block-view'>
                    <h3>Sites Created</h3>
                    <p>{stores && stores.projects ? stores.projects.length : 0}</p>

                </div>
                <div className='views-div block-view'>
                    <h3>Views</h3>
                    <p>{stores && stores.projects ? stores.projects.reduce((accumulator: number, currentValue: { view_count: number; }) => accumulator + currentValue.view_count, 0) : 0}</p>
                </div>
                <div className='order-div block-view'>
                    <h3>Orders</h3>
                    <p>{stores && stores.projects ? stores.projects.reduce((accumulator: number, currentValue: { orders: string | any[]; }) => accumulator + currentValue.orders.length, 0) : 0 }</p>
                </div>
                <div className="earnings-div block-view">
                    <h3>Earnings</h3>
                    <p>GH &#8373; 0.00</p>
                </div>
            </div>
            <div className="grid-container">
                  <h3 className='grid-header'></h3>  
            </div>
            {loader && <AuthLoader />}
        </div>
    )
}