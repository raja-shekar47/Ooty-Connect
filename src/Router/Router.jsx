import React from 'react'
import { Route, Routes } from 'react-router';
import Home from '../Page/Home/Home';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Visit from '../Page/Visit/Visit';
import Gallery from '../Page/Visit/Gallery/Gallery';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="Gallery" element={<Gallery />} />
    </Routes>
  );
}

export default Router