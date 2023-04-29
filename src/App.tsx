import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './main-sections/Authentication/Pages/SignUp/SignUp';
import LandingPage from './main-sections/Authentication/Pages/LandingPage';
import Login from './main-sections/Authentication/Pages/Login';

function App() {
  
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
