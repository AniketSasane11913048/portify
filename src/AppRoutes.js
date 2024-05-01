import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CallbackComponent from './Callback';

import Home from './HomePage';
const AppRoutes = () => { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/callback" element={<CallbackComponent />} /> 
    </Routes>
  );
};

export default AppRoutes;
