import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import Scanner from './pages/Scanner';
import UserPlants from './pages/UserPlants';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import UserYard from './pages/UserYard';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/browse' element={<Browse/>}/>
        <Route path='/scanner' element={<Scanner/>}/>
        <Route path='/myplants' element={<UserPlants/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
