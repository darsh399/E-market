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
const AppRoutes = ({ addItemInCart, updateLoggedInUser, loggedInHandler, isLoggedUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Home addItemInCart={addItemInCart} />} />
            <Route path="/mobile" element={<MobileItems addItemInCart={addItemInCart} />} />
            <Route path="/ac" element={<AcItems addItemInCart={addItemInCart} />} />
            <Route path="/refrigerator" element={<Refrigerator addItemInCart={addItemInCart} />} />
            <Route path="/userLogin" element={<UserLoginPage loggedInHandler={loggedInHandler} />} />
            <Route path="/userSignUp" element={<UserSignUpPage />} />
            <Route path="/auth" element={<UserAuthPage loggedInHandler={loggedInHandler} />} />
            <Route path='/userUpdate' element={<UserUpdatePage isLoggedUser={isLoggedUser} updateLoggedInUser={updateLoggedInUser} />} />
            <Route path='/addItem' element={<AddItem/>}/>
            <Route path='/About' element={<AboutUs/>}/>
        </Routes>
    );
};

export default AppRoutes;