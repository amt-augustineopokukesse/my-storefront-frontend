
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/authenticationPages/SignUp';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/authenticationPages/Login';
import ResetPw1 from './Pages/authenticationPages/ResetPw1';
import ResetPw2 from './Pages/authenticationPages/ResetPw2';
import store from './store';
import { Provider } from 'react-redux';
//import HomePage from './Pages/HomePage';
import AuthNotification from './Pages/authenticationPages/AuthNotification';
import SuccessfulAuthNotification from './Pages/authenticationPages/SuccessfulAuthNotification';
import SuccessfulReset from './Pages/authenticationPages/SuccessfulReset';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { CustDashboard } from './Pages/CustDashboard/CustDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EcommerceHome from './Templates/Ecommerce/Pages/EcommerceHome';
import ProductDescription from './Templates/Ecommerce/Pages/ProductDescription';
import Cart from './Templates/Ecommerce/Pages/Cart';
import Checkout from './Templates/Ecommerce/Pages/Checkout';
import TemplateCustomizationForm from './Templates/Ecommerce/Components/ProjectCustomizationForm';
import { EditTemplatePage } from './Pages/EditTemplate/EditTemplatePage';
import StoreHome from './Pages/CustDashboard/EcommerceStore/StoreHome';
import { Payment } from './Templates/Ecommerce/Pages/Payment';


const App: React.FC =() => {
  //const loggedIn = window.localStorage.getItem('isLoggedIn');
  const loggedIn = window.localStorage.getItem('token');
  const customerRole = window.localStorage.getItem('customer');

  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <ToastContainer 
            newestOnTop
            rtl={false}
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="colored"
          />
          <Routes>
            <Route path='/' element={loggedIn && customerRole ? < CustDashboard/> : loggedIn && !customerRole ?<Dashboard/> : <LandingPage />}/>
            <Route path='/custdashboard/*' element={<CustDashboard />} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/landing' element={<LandingPage/>}/>
            <Route path='/social/landing/:id' element={<LandingPage/>}/>
            <Route path='/resetpw1' element={<ResetPw1/>}/>
            <Route path='/resetpw2/:id' element={<ResetPw2/>}/>
            {/* <Route path='/homepage' element={<HomePage/>}/> */}
            <Route path='/dashboard/*' element={<Dashboard/>}/>
            <Route path='/authnotification' element={<AuthNotification/>}/>
            <Route path='/auth-success/:token' element={<SuccessfulAuthNotification/>}/>
            <Route path='/successful-reset' element={<SuccessfulReset/>}/>
            <Route path='/ecommerce' element={<EcommerceHome/>}/>
            <Route path='/product/:id' element={<ProductDescription />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/payment' element={<Payment />} />
            <Route path='/template-editor' element={<TemplateCustomizationForm/>}/>
            <Route path='/dashboard/project/templates/edit-template-page' element={<EditTemplatePage />} />
            <Route path='/stores/ecommerce' element={<StoreHome />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
