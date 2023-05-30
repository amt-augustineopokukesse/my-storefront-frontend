import { useEffect, useState } from 'react';
import '../../assets/styles/custDashboardStyles/CustDashboardPage.scss';
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { addToViewCount, getPublishedStores } from '../../Redux/ProjectSlice';
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


    const handleAddToViews = async (id: string) => {
        try {
            await dispatch(addToViewCount(id));
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div style={{padding: "20px"}} className='dashboard-page'>
            {
                stores && stores.length ?
                <h1>Stores</h1> :
                <h1>Check soon for stores</h1>
            }
            <div className='store-display'>
                {
                    stores && stores.length ? 
                    stores.map((pStore: store, index: number)=>
                    <div onClick={() => handleAddToViews(pStore.id)} style={{backgroundImage: `url(${pStore.bannerUrl})`}} className='store-object' key={index}>
                        <Link to="/stores/ecommerce" state={{linkedProject: pStore}}><p className='visit-store'>Visit Store</p></Link>
                        <div className='object-details'>
                            <p><b>Store: </b> {pStore.name}</p>
                            <p><b>Category: </b> {pStore.category}</p>
                        </div>
                    </div>) 
                    : ""
                }
            </div>
        </div>
    )
}