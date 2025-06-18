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
    const [filteredData, setFilteredData] = useState([]);
    const [openedCart, setOpenedCart] = useState();

    const items = itemsInCart.length;
    const clearNotification = () => setNotification({ message: '', type: '' });
   
    const openedCartHandler = (cartIem) => {
          setOpenedCart(cartIem);
    }

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

    const getFilteredData = async (searchValue) => {
        const data = await  fetchedItems.filter(item =>
      item.productName?.toLowerCase().includes(searchValue) ||
      item.productCateogery?.toLowerCase().includes(searchValue) ||
      item.productDescription?.toLowerCase().includes(searchValue)
    );
    return setFilteredData(data);
    }

    useEffect(() => {
        const getItemsFromCart = async () => {
            if (!isLoggedIn) return;

            try {
                const res = await axios.get(`http://localhost:5000/api/v1/user/get-items/${isLoggedIn._id}`, {
                    withCredentials: true
                });
                if (res.data.success) {
                    setitemsInCart(res.data.cartItems);
                } 
            } catch (err) {
                console.error("Cart fetch failed:", err);
            }
        };

        getItemsFromCart();
    }, [isLoggedIn]);


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

    const addItemInCart = async (newData) => {

        if (!isLoggedIn) {
            showNotification("Please log in to add items to cart", "error")
            return;
        }
        const userId = isLoggedIn._id;
        const productId = newData._id;

        try {
            const res = await axios.post('http://localhost:5000/api/v1/user/addItem', {
                userId,
                productId
            },
                {
                    withCredentials: true
                });

            if (res.data.success) {
                setitemsInCart((prev) => {
                    const isDuplicate = prev.some(item => item._id === newData._id);
                    if(isDuplicate){
                        showNotification('Item already added in cart', 'error')
                    }
                    return isDuplicate ? prev : [...prev, newData];

                })
                showNotification('Item added in cart', 'success');
            }
            else {
                showNotification(res.data.message || "Failed to add item", "error");
            }
        } catch (err) {
            showNotification("Something went wrong", "error");
            console.error(err);
        }
    }


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
        updateLoggedInUser,
        getFilteredData,
        filteredData,
        openedCartHandler,
        openedCart
    };

    return (
        <GlobalUiContext.Provider value={value}>
            {children}
        </GlobalUiContext.Provider>
    );
};

export default GlobalUiContextProvider;
