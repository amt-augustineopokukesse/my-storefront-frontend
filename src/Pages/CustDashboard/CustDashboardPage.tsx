import { useEffect, useState } from 'react';
import '../../assets/styles/custDashboardStyles/CustDashboardPage.scss';
import { useAppDispatch } from '../../store';
import { toast } from 'react-toastify';
import { addToViewCount, getPublishedStores } from '../../Redux/ProjectSlice';
import { Link } from 'react-router-dom';


export const CustDashboardPage: React.FC = () => {

    const ProductInit = {
        category: "",
        colors_available: [],
        created_at: "",
        description: "",
        discount: "",
        id: "",
        image: "",
        initialStock: 0,
        package: [],
        paragraphs: [],
        price: 0,
        productName: "",
        project_id: "",
        quantity: "",
        quantity_sold: "",
        raw_material: [],
        sizes_available: [],
        sku: "",
        stars: "",
        stockAvailable: "",
        sub_description: "",
        unit: "",
        updated_at: ""
    }


    const orderInit = {
        amount: 0,
        associated_account_number: "",
        created_at: "",
        delivery_completed: false,
        delivery_level_reached: "",
        id: "",
        paid: true,
        payment_method: "",
        pickup_mode: "",
        products: "",
        project_id: "",
        shipping_reciepient_address: "",
        shipping_reciepient_contacts: [],
        shipping_reciepient_names: [],
        updated_at: "",
        userId: ""
    }
    
    const templateInit = {
        aboutUs: "",
        bodyFontColor: "",
        bodyFontFamily: "",
        bodyFontSize: "",
        carouselInclude: false,
        contactUs: false,
        id: "",
        nameFontFamily: "",
        nameFontSize: "",
        otherFontSize: "",
        primaryColor: "",
        project_id: "",
        secondaryColor: "",
    }

    const StoreInit = {
        address:             "",
        bannerUrl:           "",
        business_id:         "",
        category:            "",
        currency:            "",
        description:         "",
        facebookURL:         "",
        id:                  "",
        instagramURL:        "",
        location:            "",
        name:                "",
        orders:              [orderInit],
        phoneNumber:         "",
        products:            [ProductInit],
        published:           false,
        subscription_emails: [],
        template:            templateInit,
        twitterURL:          "",
        view_count:          0,
    }

    
    const [stores, setStores ] = useState([StoreInit]);

    const dispatch = useAppDispatch();
    const getStores = async () => {
        try {
            const response = await dispatch(getPublishedStores());
            if (response) setStores(response.payload.data)
            console.log(response.payload.data);
            
        } catch (error) {
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
                    stores.map((pStore, index: number)=>
                    <div onClick={() => handleAddToViews(pStore.id)} style={{border: `5px solid rgb(${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)}, ${Math.floor(Math.random() * 254)})`, backgroundImage: `url(${pStore.bannerUrl})`}} className='store-object' key={index}>
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