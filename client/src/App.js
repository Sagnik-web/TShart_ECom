import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/login'
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trending';
import BestSeller from './Pages/BestSeller/BestSeller';
// import Dress from './Pages/Male/Dress/MaleDress';
// import MaleDressCard from './Pages/Male/Dress/DressCard/MaleDressCard';
import MaleDress from './Pages/Male/Dress/MaleDress';
import FemaleDress from './Pages/Female/Dress/FemaleDress';
import DressDetails from './Pages/DressDetails/DressDetails';
import Cart from './Pages/Cart/Cart';
import AdminLogin from './Pages/Admin/Login/Login';
import AdminHome from './Pages/Admin/Home/Home';
import AdminMDress from './Pages/Admin/Male/MDress/MDress';
import AdminMDressDetails from './Pages/Admin/Male/MDressDetails/MDressDetails';
import AdminMDressPost from './Pages/Admin/Male/MDressPost/MDressPost';
import AdminAllUsers from './Pages/Admin/User/AllUsers/AllUsers';
import AdminUserDetails from './Pages/Admin/User/UserDetails/UserDetails';
import AdminAllManager from './Pages/Admin/Manager/AllManager/AllManager';
import AdminOrder from './Pages/Admin/Orders/Order/Order';
import AdminAllOrder from './Pages/Admin/Orders/AllOrders/AllOrder';
import AdminMDressUpdate from './Pages/Admin/Male/MDressUpdate/MDressUpdate';
import Payment from './Pages/Payment/Payment';
import UserOrders from './Pages/UserOrders/UserOrders';
import UserDetails from './Pages/User/UserDetails/UserDetails';
import UpdateUserDetails from './Pages/User/UpdateUserDetails/UpdateUserDetails';
import ForgotPassword from './Pages/User/PasswordSet/ForgotPassword/ForgotPassword';
import OTP from './Pages/User/PasswordSet/OTP/OTP';
import ResetPassword from './Pages/User/PasswordSet/ResetPassword/ResetPassword';
import UpdatePassword from './Pages/User/PasswordSet/UpdatePassword/UpdatePassword';
import AdminFDress from './Pages/Admin/Female/FDress/FDress';
import AdminFDressDetails from './Pages/Admin/Female/FDressDetails/FDressDetails';
import AdminFDressPost from './Pages/Admin/Female/FDressPost/FDressPost';
import AdminFDressUpdate from './Pages/Admin/Female/FDressUpdate/FDressUpdate';
import ManagerCreate from './Pages/Admin/Manager/ManagerCreate/ManagerCreate';
import ManagerUpdate from './Pages/Admin/Manager/ManagerUpdate/ManagerUpdate';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route
                path='/'
                element={<Home/>}
              />
              
              <Route
                path='/login'
                element={<Login/>}
              />

              <Route
                path='/signup'
                element={<Signup/>}
              />

              <Route 
                path='/trending'
                element={<Trending/>}
              />

              <Route
                path='/bestseller'
                element={<BestSeller/>}
              />

              <Route
                path='/male'
                element={<MaleDress/>}
              />

              <Route
                path='/female'
                element={<FemaleDress/>}
              />

              <Route
                path='/dressDetails'
                element={<DressDetails/>}
              />

              <Route
                path='/cart'
                element={<Cart/>}
              />

              <Route
                path='/admin'
                element={<AdminLogin/>}
              />

              <Route
                path='/admin/home'
                element={<AdminHome/>}
              />



              <Route
                path='/admin/mdress'
                element={<AdminMDress/>}
              />

              <Route
                path='/admin/mdressdetails'
                element={<AdminMDressDetails/>}
              />

              <Route
                path='/admin/mdress/post'
                element={<AdminMDressPost/>}
              />

              <Route
                path='/admin/mdress/edit'
                element={<AdminMDressUpdate/>}
              />




              <Route
                path='/admin/fdress'
                element={<AdminFDress/>}
              />
              
              <Route
                path='/admin/fdressdetails'
                element={<AdminFDressDetails/>}
              />

              <Route
                path='/admin/fdress/post'
                element={<AdminFDressPost/>}
              />

              <Route
                path='/admin/fdress/edit'
                element={<AdminFDressUpdate/>}
              />




              <Route
                path='/admin/manager/create'
                element={<ManagerCreate/>}
              />
              
              <Route
                path='/admin/manager'
                element={<AdminAllManager/>}
              />

              <Route
                path='/admin/manager/edit'
                element={<ManagerUpdate/>}
              />





              <Route
                path='/admin/user'
                element={<AdminAllUsers/>}
              />

              <Route
                path='/admin/userDetails'
                element={<AdminUserDetails/>}
              />

             



              <Route
                path='/admin/order'
                element={<AdminOrder/>}
              />

              <Route
                path='/admin/allorder'
                element={<AdminAllOrder/>}
              />


              <Route
                path='/payment'
                element={<Payment/>}
              />

              <Route
                path='/order'
                element={<UserOrders/>}
              />

              
              <Route
                path='/user'
                element={<UserDetails/>}
              />

              <Route
                path='/updateUser'
                element={<UpdateUserDetails/>}
              />

              <Route
                path='/forgotPassword'
                element={<ForgotPassword/>}
              />

              <Route
                path='/otp'
                element={<OTP/>}
              />

              <Route
                path='/resetPassword'
                element={<ResetPassword/>}
              />

              <Route
                path='/updatePassword'
                element={<UpdatePassword/>}
              />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
