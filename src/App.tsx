import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/authenticationPages/SignUp';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/authenticationPages/Login';
import ResetPw1 from './Pages/authenticationPages/ResetPw1';
import ResetPw2 from './Pages/authenticationPages/ResetPw2';
import store from './store';
import { Provider } from 'react-redux';
import HomePage from './Pages/HomePage';
import AuthNotification from './Pages/authenticationPages/AuthNotification';
import SuccessfulAuthNotification from './Pages/authenticationPages/SuccessfulAuthNotification';


const App: React.FC =() => {
  //const loggedIn = window.localStorage.getItem('isLoggedIn');
  const loggedIn = window.localStorage.getItem('token');

  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={loggedIn ? <HomePage/> : <LandingPage />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/resetpw1' element={<ResetPw1/>}/>
            <Route path='/resetpw2/:id' element={<ResetPw2/>}/>
            <Route path='/homepage' element={<HomePage/>}/>
            <Route path='/authnotification' element={<AuthNotification/>}/>
            <Route path='/auth-success/:id/:token' element={<SuccessfulAuthNotification/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
