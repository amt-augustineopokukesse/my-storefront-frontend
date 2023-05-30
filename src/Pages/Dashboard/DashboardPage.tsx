import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/DashboardPage.scss'
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { getStores } from '../../Redux/ProjectSlice';
import { AuthLoader } from '../../components/authComponents/AuthLoader';


interface Order {
    paid: boolean;
    amount: number;
}
  
interface Project {
    id: number;
    orders: Order[];
}

export const DashboardPage: React.FC = () => {

    const [loader, setLoader] = useState<boolean>(false);
    const [earnings, setEarnings] = useState(0);
    const [orders, setOrders] = useState(0);
    const [views, setViews] = useState(0);
    const [totalStores, setTotalStores] = useState(0);


    const dispatch = useAppDispatch();

    const getAllStores = async () => {
        try {
            const response = await dispatch(getStores());
            if (response) {
                console.log(response.payload.data);
                if (response.payload.data) {
                    const store = response.payload.data;
                    const totalAmountPaid: number = store.projects.reduce((accumulator: number, project: Project) => {
                        const paidOrders: Order[] = project.orders.filter((order: Order) => order.paid);
                        const paidAmounts: number[] = paidOrders.map((order: Order) => order.amount);
                        return accumulator + paidAmounts.reduce((sum: number, amount: number) => sum + amount, 0);
                    }, 0);
                    const totalOrders: number = store.projects.reduce((accumulator: number, currentValue: Project) => accumulator + currentValue.orders.length, 0);

                    const totalViews: number = store.projects.reduce((accumulator: number, currentValue: { view_count: number; }) => accumulator + currentValue.view_count, 0);

                    setTotalStores(store.projects.length)
                    setEarnings(totalAmountPaid);
                    setOrders(totalOrders);
                    setViews(totalViews);
                }
                setTimeout(()=>{
                    setLoader(false);
                }, 500)
            }
        } catch (error) {
            setLoader(false);
            console.log(error)
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
                    <p>{ totalStores }</p>

                </div>
                <div className='views-div block-view'>
                    <h3>Views</h3>
                    <p>{views}</p>
                </div>
                <div className='order-div block-view'>
                    <h3>Orders</h3>
                    <p>{orders }</p>
                </div>
                <div className="earnings-div block-view">
                    <h3>Earnings</h3>
                    <p>GH &#8373; {earnings}</p>
                </div>
            </div>
            <div className="grid-container">
                  <h3 className='grid-header'></h3>  
            </div>
            {loader && <AuthLoader />}
        </div>
    )
}