import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import './stylesheets/Layout.css';
import './stylesheets/products.css';
import './stylesheets/Authentication.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Task from './pages/Task';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <h1>Fire Commerce</h1>
      <HomePage />
      <button classname='btn btn-primary'>Bootstrap Button</button> */}

      <BrowserRouter>
        <Routes>
          <Route path='/Login' exact element={<LoginPage />} />
          <Route path='/Register' exact element={<RegisterPage />} />
          <Route path='/' exact element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/ProductInfo/:productid' exact element={<ProtectedRoutes><ProductInfo /></ProtectedRoutes>} />
          <Route path='/Cart' exact element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
          <Route path='/task' exact element={<Task />}/>
        </Routes>
      </BrowserRouter >

    </div >
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}