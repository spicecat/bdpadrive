import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Helmet } from "react-helmet"
import Login from "./containers/Login"
import Explorer from "./containers/Explorer"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/explorer" element={<Explorer />} />
    </Routes>
  </BrowserRouter>
}

export default App