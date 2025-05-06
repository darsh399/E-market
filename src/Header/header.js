import React, { useState } from 'react';
import logoImg from './../images/logoImg.jpg';
import Logo from '../common/Logo';
import CartLogo from './components/CartLogo';
import InputSearch from './components/InputSearch';
import SearchLogo from './components/SearchLogo';
import './header.css';
import Cart from './components/Cart';

const Header = ({ itemsInCart, addedItemsInCart ,removeItemFromCart  }) => {
    const [input, setInput] = useState('');
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isInputVisible, setIsInputVisible] = useState(false);

    const inputHandler = (data) => {
        setInput(data);
    };

    const onClickEventHandler = () => {
        console.log(addedItemsInCart)
        setInput('');
    };

    const isVisibleFormHandler = (data) => {
        setIsInputVisible(data);
    }

    return (
        <div className="header-container">
            <div className="log-container">
                <Logo img={logoImg} alt="logo" size="60px" />
                <h1 className="header-title">E-market</h1>
            </div>

            <div className="icon-group">
                <CartLogo items={itemsInCart} onClick={() => setIsCartVisible((prev) => !prev)} />
                <SearchLogo openVisibleForm={isVisibleFormHandler} />
            </div>

            {isInputVisible && (
                <InputSearch
                    closeVisibleForm={isVisibleFormHandler}
                    onClickEventHandler={onClickEventHandler}
                    input={input}
                    inputHandler={inputHandler}
                />
            )}

            {isCartVisible && (
                <div className="header-cart-popup">
                    <Cart removeItemFromCart={removeItemFromCart }  setIsCartVisible={setIsCartVisible} addedItemsInCart={addedItemsInCart} />
                </div>
            )}

        </div>

    );
};

export default Header;
