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

const AppRoutes = ({error, showNotification, fetchItems, addItemInCart,fetchedItems, updateLoggedInUser, loggedInHandler, isLoggedUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Home error={error} fetchedItems={fetchedItems} addItemInCart={addItemInCart} />} />
            <Route path="/mobile" element={<MobileItems fetchedItems={fetchedItems} addItemInCart={addItemInCart} />} />
            <Route path="/ac" element={<AcItems fetchedItems={fetchedItems} addItemInCart={addItemInCart} />} />
            <Route path="/refrigerator" element={<Refrigerator fetchedItems={fetchedItems} addItemInCart={addItemInCart} />} />
            <Route path="/userLogin"  element={<UserLoginPage showNotification={showNotification} loggedInHandler={loggedInHandler} />} />
            <Route path="/userSignUp" element={<UserSignUpPage />} />
            <Route path="/auth" element={<UserAuthPage showNotification={showNotification} loggedInHandler={loggedInHandler} />} />
            <Route path='/userUpdate' element={<UserUpdatePage isLoggedUser={isLoggedUser} updateLoggedInUser={updateLoggedInUser} />} />
            <Route path='/addItem' element={<AddItem fetchItems={fetchItems}/>}/>
            <Route path='/About' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );
};

export default AppRoutes;