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
import UserForgotPasswordPage from '../User/ResetPassword/UserForgotPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/mobile" element={<MobileItems/>} />
            <Route path="/ac" element={<AcItems/>} />
            <Route path="/refrigerator" element={<Refrigerator />} />
            <Route path="/userLogin"  element={<UserLoginPage  />} />
            <Route path="/userSignUp" element={<UserSignUpPage />} />
            <Route path="/auth" element={<UserAuthPage  />} />
            <Route path='/userUpdate' element={<UserUpdatePage />} />
            <Route path='/addItem' element={<AddItem />}/>
            <Route path='/About' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/forgotpassword' element={<UserForgotPasswordPage/>}></Route>
            <Route path='verify-otp' element={<VerifyOtp/>}/>
        </Routes>
    );
};

export default AppRoutes;