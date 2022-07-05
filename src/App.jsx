import React from "react";
import { Helmet } from "react-helmet"
import Login from "./components/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



    





const App = () => {
  return (


    <div className="App" >
      
      <Helmet>
        <style>{"body { background-color: floralWhite; }"}</style>

        
      </Helmet>

      <div style={{width:'100%', height:'100%', display:'flex', justifyContent:'center',alignItems:'center', position:'absolute'}}>

      <Login></Login>

      </div>
       


      
    </div>


  );
}

export default App;

