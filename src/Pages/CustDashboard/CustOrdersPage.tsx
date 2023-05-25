import '../../assets/styles/custDashboardStyles/CustOrdersPage.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

type user = {
    [key: string]: any;
}

export const CustOrdersPage: React.FC<user> = (props) => {

    const { customerUser } = props;
    const [ customerExists, setcustomerExists ] = useState(customerUser)
    
    useEffect(() => {
        const customer = localStorage.getItem("customer");
        if (customer) {
            setcustomerExists(JSON.parse(customer));
        }
    }, []);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "orderDate", headerName: "Order Date", width: 180 },
        { field: "orderAmount", headerName: "Amount", width: 180 },
        { field: "orderPaid", headerName: "Paid", width: 180 },
        { field: "deliveryComplete", headerName: "Delivered", width: 180 },
        { field: "shippingAddress", headerName: "Shipping Address", width: 180}
    ]

    const row = (order: any, idx: number) => {
        return { id: idx, orderDate: order.created_at, orderAmount: order.amount, orderPaid: order.paid, deliveryComplete: order.delivery_completed, shippingAddress: order.shipping_reciepient_address}
    }
 
    const rows = customerExists &&  customerExists.orders.length ? 
            customerExists.orders.map((order:any, index: number) => row(order, index))
        :   []

    return (
        <div style={{padding: "30px"}} className="orders-container">
            {
                customerExists &&  customerExists.orders.length ?
                <h1>Orders</h1> : <h2>You have not made any Orders </h2>
            }
            <div style={{ height: 400, width: "fit-content", margin: "2rem" }}>
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
    )
}