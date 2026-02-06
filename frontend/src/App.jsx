import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReturnPackaging from "./pages/ReturnPackaging";
import AdminEcoApproval from "./pages/AdminEcoApproval";
import EcoPointsWallet from "./pages/EcoPointsWallet";
=======
>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
<<<<<<< HEAD
      <ToastContainer />
=======

>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
<<<<<<< HEAD
        <Route path='/product/:productId' element={<Product />} />
=======
        <Route path='/product' element={<Product />} />
>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
<<<<<<< HEAD
        <Route path="/return-packaging" element={<ReturnPackaging />} />
        <Route path="/admin-eco" element={<AdminEcoApproval />} />
        <Route path="/eco-wallet" element={<EcoPointsWallet />} />

=======
>>>>>>> f05f3471c65141d7dc58a1c78ad16376254097c5
      </Routes>
      <Footer />

    </div>
  )
}

export default App


