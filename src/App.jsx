import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Helmet } from "react-helmet"
import { Explorer, Layout, Login } from "./containers"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='explorer' element={<Explorer />} />
        <Route path='*' element={<Explorer />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App