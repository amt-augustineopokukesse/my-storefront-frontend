import { useEffect, useState } from 'react';
import '../../assets/styles/custDashboardStyles/CustDashboardPage.scss';
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { getPublishedStores } from '../../Redux/ProjectSlice';
import { Link } from 'react-router-dom';

type store = {
    [key: string]: any;
}

export const CustDashboardPage: React.FC<store> = (props) => {

    const { publishedstores } = props;
    const [stores, setStores ] = useState(publishedstores);

    const dispatch = useAppDispatch();
    const getStores = async () => {
        try {
            const response = await dispatch(getPublishedStores());
            if (response) setStores(response.payload.data)
        } catch (error) {
            // console.log(error)
            toast.error("Error Retrieving Storefront Stores")
            return;
        }
    }
    useEffect(() => {
        getStores();
    },[]);

    useEffect(() => {
        console.log(stores)
    },[stores])

    return (
        <div style={{padding: "20px"}} className='dashboard-page'>
            <h1>Stores</h1>
            <div className='store-display'>
                {
                    stores && stores.length ? 
                    stores.map((pStore: store, index: number)=>
                    <div className='store-object' key={index}>
                        <Link to="/stores/ecommerce" state={{linkedProject: pStore}}><p>Visit Store</p></Link>
                    </div>) 
                    : ""
                }
            </div>
        </div>
    )
}