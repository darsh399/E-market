import React from 'react';
import logoImg from './../images/logoImg.jpg';
import Logo from '../common/Logo';
import CartLogo from './components/CartLogo';
import InputSearch from './components/InputSearch';
import SearchLogo from './components/SearchLogo';
import ProfileLogo from './components/ProfileLogo';
import './header.css';
import Cart from './components/Cart';
import NavList from './Navbar/NavList';
import ProfileDropdown from './components/ProfileDropdown';
import { useUiContext } from '../Context/UiProvider';

const Header = ({ itemsInCart, isLoggedIn, setIsLoggedIn, addedItemsInCart, inputHandler, input, onClickEventHandler, removeItemFromCart, showNotification }) => {
    const{isInputVisible,isCartVisible, isProfileMenuVisible} = useUiContext();
   



    return (
        <>
            <div className="header-container">

                <div className="log-container">
                    <Logo img={logoImg} alt="logo" size="60px" />
                    <h1 className="header-title">E-market</h1>
                </div>

                <div className="icon-group">
                    <ProfileLogo isLoggedIn={isLoggedIn} />
                    {isProfileMenuVisible && (
                        <ProfileDropdown
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            showNotification={showNotification}
                        />

                    )}

                    <CartLogo items={itemsInCart}/>
                    <SearchLogo/>
                </div>

                {isInputVisible && (
                    <InputSearch
                       
                        onClickEventHandler={onClickEventHandler}
                        input={input}
                        inputHandler={inputHandler}
                    />
                )}

                {isCartVisible && (
                    <div className="header-cart-popup">
                        <Cart removeItemFromCart={removeItemFromCart} addedItemsInCart={addedItemsInCart} />
                    </div>
                )}

            </div>
            <NavList />
        </>

    );
};

export default Header;
