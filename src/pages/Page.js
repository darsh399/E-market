import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import AppRoutes from '../Routes/AppRoutes';
import axios from 'axios';

const Page = () => {
    const [itemsInCart, setitemsInCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [input, setInput] = useState('');
    const [fetchedItems, setFetchedItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/item/allData'); 
        setFetchedItems(res.data.itemsData);  
        console.log('allData....', res.data.itemsData);
      } catch (err) {
        setError("Failed to load items");
        console.error(err);
      }
    };

    fetchItems();
  }, []);

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
                    fetchedItems={fetchedItems}
                    error={error}
                    updateLoggedInUser={updateLoggedInUser}
                />
            </main>

            <Footer />
        </div>
    );
};

export default Page;
