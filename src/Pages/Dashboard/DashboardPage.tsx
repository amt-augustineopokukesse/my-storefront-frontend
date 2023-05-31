import { useEffect, useState } from 'react';
import '../../assets/styles/dashboardStyles/DashboardPage.scss'
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { getStores } from '../../Redux/ProjectSlice';
import { AuthLoader } from '../../components/authComponents/AuthLoader';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface Order {    
    amount: 0;
    created_at: string;
    paid?: boolean;
    delivery_completed?: boolean;
    shipping_reciepient_address?: string;
    delivery_level_reached?: string;
    id?: string;
    payment_method?: string;
    pickup_mode?: string;
    products?: string;
    shipping_reciepient_contacts?: string[];
    shipping_reciepient_names?: string[];
}
  
interface Project {
    id: number;
    orders: Order[];
}

export const DashboardPage: React.FC = () => {

    const orderInit: Order = {
        amount: 0,
        created_at: "",
        paid: false,
        delivery_completed: false,
        shipping_reciepient_address: "",
        delivery_level_reached: "",
        id: "",
        payment_method: "",
        pickup_mode: "",
        products: "",
        shipping_reciepient_contacts: [],
        shipping_reciepient_names: []
    }

    const [loader, setLoader] = useState<boolean>(false);
    const [earnings, setEarnings] = useState(0);
    const [orders, setOrders] = useState(0);
    const [views, setViews] = useState(0);
    const [totalStores, setTotalStores] = useState(0);
    const [trackOrders, setTrachOrders] = useState([orderInit]);


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

                    const AllOrders = store.projects.map((project: Project) => project.orders);
                    setTrachOrders(AllOrders.flat())
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


    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 20 },
        { field: "orderDate", headerName: "Order Date", width: 95 },
        { field: "orderAmount", headerName: "Amount", width: 95 },
        { field: "orderPaid", headerName: "Status", width: 70 },
        { field: "deliveryComplete", headerName: "Delivered", width: 80 },
        { field: "shippingAddress", headerName: "Shipping Address", width: 180}
    ]
    
    const row = (order: Order, idx: number) => {
        return { id: idx, orderDate: new Date(order.created_at).toLocaleDateString(), orderAmount: order.amount, orderPaid: order.paid ? "Paid" : "Not Paid", deliveryComplete: order.delivery_completed ? "Yes" : "No", shippingAddress: order.shipping_reciepient_address}
    }

    const rows = trackOrders && trackOrders.length ?
            trackOrders.map((order: Order, index: number) => row(order, index))
        :   []

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
                <h3 style={{marginLeft: "100px"}} className=''>Order Tracker</h3>  
                <div style={{ height: 300, width: "fit-content", margin: "2rem" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
            {loader && <AuthLoader />}
        </div>
    )
}