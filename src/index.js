import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Explorer from './Explorer'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path = "/explorer" element = {<Explorer />} />
      <Route index element={<App />} />
  </Routes>
</BrowserRouter>
)