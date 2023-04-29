import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './main-sections/Authentication/Pages/SignUp/SignUp';
import LandingPage from './main-sections/Authentication/Pages/LandingPage';

function App() {
  
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/signup' element={<SignUp/>}/>

        </Routes>
      </div>
    </Router>
  )
}

export default App
