import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Pages/authenticationPages/SignUp';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/authenticationPages/Login';
import ResetPw1 from './Pages/authenticationPages/ResetPw1';
import ResetPw2 from './Pages/authenticationPages/ResetPw2';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC =() => {
  
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/resetpw1' element={<ResetPw1/>}/>
            <Route path='/resetpw2' element={<ResetPw2/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}

export default App
