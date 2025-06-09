import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const GlobalUiContext = createContext();


export const useGlobalUiContext = () => useContext(GlobalUiContext);

const GlobalUiContextProvider = ({ children }) => {
    const [itemsInCart, setitemsInCart] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [input, setInput] = useState('');
    const [fetchedItems, setFetchedItems] = useState([]);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState({ message: '', type: '' });
    
    const items = itemsInCart.length;
    const clearNotification = () => setNotification({ message: '', type: '' });

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => clearNotification(), 3000);
    };

   
    const fetchItems = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/v1/item/allData');
            setFetchedItems(res.data.itemsData);
        } catch (err) {
            setError("Failed to load items");
            console.error(err);
        }
    };

    
    useEffect(() => {
        fetchItems();
        const checkLoginStatus = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/v1/user/profile', {
                    withCredentials: true
                });
                setIsLoggedIn(res.data.user);
            } catch (err) {
                console.log("Not logged in:", err.response?.data?.message || err.message);
            }
        };

        checkLoginStatus();
    }, []);

    
    const removeItemFromCart = (id) => {
        setitemsInCart(prev => prev.filter(item => item._id !== id));
    };

    const addItemInCart = (newData) => {
        setitemsInCart(prev => {
            const isDuplicate = prev.some(item => item._id === newData._id);
            return isDuplicate ? prev : [...prev, newData];
        });
        alert('Item added in cart');
    };

    
    const inputHandler = (data) => setInput(data);
    const onClickEventHandler = () => setInput('');

   
    const loggedInHandler = (data) => setIsLoggedIn(data);
    const updateLoggedInUser = (updatedUserData) => setIsLoggedIn(updatedUserData);

    
    const value = {
        items,
        itemsInCart,
        setitemsInCart,
        isLoggedIn,
        setIsLoggedIn,
        input,
        setInput,
        inputHandler,
        onClickEventHandler,
        fetchedItems,
        setFetchedItems,
        fetchItems,
        error,
        setError,
        notification,
        showNotification,
        clearNotification,
        removeItemFromCart,
        addItemInCart,
        loggedInHandler,
        updateLoggedInUser
    };

    return (
        <GlobalUiContext.Provider value={value}>
            {children}
        </GlobalUiContext.Provider>
    );
};

export default GlobalUiContextProvider;
