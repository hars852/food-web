import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/PlaceOrder/Placeorder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/Verify/Verify';
import MyOrder from './pages/MyOrder/MyOrder';
const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Placeorder' element={<Placeorder />} />
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/myorder' element={<MyOrder/>}/>
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default App;
