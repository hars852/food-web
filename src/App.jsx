import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Sidebar from './Component/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom'; // ✅ You also forgot to import Route!
import Add from './Pages/Add/Add';  // ✅ Fixed path here
import List from './Pages/List/List';
import Order from './Pages/Orders/Order';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
const url = 'http://localhost:4000';

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
