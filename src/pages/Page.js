import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AppRoutes from '../Routes/AppRoutes';

const Page = () => {
    const [itemsInCart, setitemsInCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [input, setInput] = useState('');

    const removeItemFromCart = (id) => {
        setitemsInCart(prev => prev.filter(item => item.id !== id));
    };

    const inputHandler = (data) => {
        setInput(data);
    };

    const loggedInHandler = (data) => {
        setIsLoggedIn(data);
    };

    const updateLoggedInUser = (updatesUserData) => {
        setIsLoggedIn(updatesUserData);
    }

    const onClickEventHandler = () => {
        setInput('');
    };

    const addItemInCart = (newData) => {
        setitemsInCart(prev => {
            const isDuplicate = prev.some(item => item.id === newData.id);
            return isDuplicate ? prev : [...prev, newData];
        });
    };

    return (
        <div>
            <Header
                inputHandler={inputHandler}
                input={input}
                onClickEventHandler={onClickEventHandler}
                isLoggedIn={isLoggedIn}
                removeItemFromCart={removeItemFromCart}
                itemsInCart={itemsInCart.length}
                addedItemsInCart={itemsInCart}
            />

            <main>
                <AppRoutes
                    addItemInCart={addItemInCart}
                    loggedInHandler={loggedInHandler}
                    isLoggedUser = {isLoggedIn}
                    updateLoggedInUser={updateLoggedInUser}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Page;
