import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Favorites from './pages/Favorites';
import Scanner from './pages/Scanner';
import UserPlants from './pages/UserPlants';
// import UserYard from './pages/UserYard';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
