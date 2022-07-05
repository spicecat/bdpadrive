import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Explorer, Layout, Login } from './containers'
import { UserProvider } from './contexts'

const App = () => {
  return <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='explorer' element={<Explorer />} />
          <Route path='*' element={<Explorer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
}

export default App