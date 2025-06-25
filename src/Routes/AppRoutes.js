import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/NavComponents/Home';
import MobileItems from '../components/NavComponents/MobileItems';
import AcItems from '../components/NavComponents/AcItems';
import Refrigerator from '../components/NavComponents/Refrigerator';
import UserLoginPage from '../User/UserLoginPage';
import UserSignUpPage from '../User/UserSignUpPage';
import UserUpdatePage from '../User/UserUpdatePage';
import UserAuthPage from '../User/UserAuthToggle/UserAuthPage';
import AddItem from '../components/Item/AddItem';
import AboutUs from '../components/NavComponents/About';
import Contact from '../components/NavComponents/Contact';
import VerifyOtp from '../User/ResetPassword/VerifyOtp';
import SearchResults from '../Header/components/SearchResult';
import UserForgotPasswordPage from '../User/ResetPassword/UserForgotPage';
import NewPassword from '../User/ResetPassword/NewPassword';
import PreviousOrders from '../Header/components/PreviousOrders';
import OpenedCart from '../common/OpenedCart';
import DeleteUser from '../User/DeleteUser';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mobile" element={<MobileItems/>} />
            <Route path="/ac" element={<AcItems/>} />
            <Route path="/orders" element={<PreviousOrders />} />
            <Route path="/refrigerator" element={<Refrigerator />} />
            <Route path="/userLogin"  element={<UserLoginPage  />} />
            <Route path="/userSignUp" element={<UserSignUpPage />} />
            <Route path="/auth" element={<UserAuthPage  />} />
            <Route path='/userUpdate' element={<UserUpdatePage />} />
            <Route path='/addItem' element={<AddItem />}/>
            <Route path='/About' element={<AboutUs/>}/>
            <Route path="/search-results" element={<SearchResults />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/delete-user' element={<DeleteUser/>}/>
            <Route path='/forgotpassword' element={<UserForgotPasswordPage/>}></Route>
            <Route path='/verify-otp' element={<VerifyOtp/>}/>
            <Route path='/update-new-password' element={<NewPassword/>}/>
            <Route path="/opened-cart" element={<OpenedCart />} />
        </Routes>
    );
}; 

export default AppRoutes;