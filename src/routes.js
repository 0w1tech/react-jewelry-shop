import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Rings from './components/Rings/Rings';
import Necklace from './components/Necklace/Necklace';
import Bracelet from './components/Bracelet/Bracelet';
import Contact from './components/Contact/Contact';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Categories from './components/Categories/Categories';
import Earring from './components/Earrings/Earrings';
import Cart from './components/Cart/Cart';

const RoutesConfig = ({
  cartItems,
  setCartItems,
  addToCart,
  removeFromCart,
  handleLogin,
  isLogin,
  currentUser,
  setCurrentUser,
  selectedProductQuantity,
  setSelectedProductQuantity
}) => (
  <Routes>
    <Route path="/" element={<Home addToCart={addToCart} />} />
    <Route path="/rings" element={<Rings addToCart={addToCart} />} />
    <Route path="/necklace" element={<Necklace addToCart={addToCart} />} />
    <Route path="/bracelet" element={<Bracelet addToCart={addToCart} />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/profile" element={isLogin ? (
      <Profile 
        currentUser={currentUser} 
        isLogin={isLogin} 
        setCurrentUser={setCurrentUser} 
        selectedProductQuantity={selectedProductQuantity} 
        setSelectedProductQuantity={setSelectedProductQuantity} 
      />
    ) : (
      <Navigate to="/login" replace />
    )} />
    <Route path="/earring" element={<Earring addToCart={addToCart} />} />
    <Route path="/category/:type" element={<Categories addToCart={addToCart} />} />
    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} removeFromCart={removeFromCart} isLogin={isLogin} addToCart={addToCart} selectedProductQuantity={selectedProductQuantity} setSelectedProductQuantity={setSelectedProductQuantity} />} />
    <Route path="/product/:category/:id" element={<Product addToCart={addToCart} selectedProductQuantity={selectedProductQuantity} setSelectedProductQuantity={setSelectedProductQuantity} />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login handleLogin={handleLogin} />} />
    <Route path="/checkout" element={isLogin ? (
      <Checkout isLogin={isLogin} selectedProductQuantity={selectedProductQuantity} setSelectedProductQuantity={setSelectedProductQuantity} />
    ) : (
      <Navigate to="/login" replace />
    )} />
  </Routes>
);

export default RoutesConfig;
