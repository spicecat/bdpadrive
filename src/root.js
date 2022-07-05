import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from 'App.jsx';
import Explorer from 'Explorer.jsx'
import createFile from './components/CreateFile'
import Login from './components/Login'



root.render (
    <BrowserRouter>
        <Routes>
            <Route path = "/explorer" element = {<Explorer />} />
            <Route index element={<App />} />



            
        </Routes>
    </BrowserRouter>



)