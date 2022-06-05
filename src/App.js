import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
   </Router>
    </>
  );
}

export default App;
