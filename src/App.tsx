import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './main-sections/Authentication/Pages/SignUp/SignUp';
import LandingPage from './main-sections/Authentication/Pages/LandingPage';
import Login from './main-sections/Authentication/Pages/Login';
import ResetPw1 from './main-sections/Authentication/Pages/ResetPw1';
import ResetPw2 from './main-sections/Authentication/Pages/ResetPw2';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  
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
