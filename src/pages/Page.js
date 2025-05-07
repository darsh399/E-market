import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import MobileItems from '../components/NavComponents/MobileItems';
import Home from '../components/NavComponents/Home';
import { Routes, Route } from 'react-router-dom';
const Page = () => {
    const [itemsInCart, setitemsInCart] = useState([]);
    const [input, setInput] = useState('');
    const removeItemFromCart = (id) => {
        setitemsInCart((prevData) => prevData.filter((item) => item.id !== id));
    };

    const inputHandler = (data) => {
        setInput(data);
    };

    const onClickEventHandler = () => {
        console.log(input);
        setInput('');
    };
    const addItemInCart = (newData) => {
        setitemsInCart((prevData) => {
            const isDuplicate = prevData.some((item) => item.id === newData.id);
            return isDuplicate ? prevData : [...prevData, newData];
        })
    }

    return (
        <div>
            <Header inputHandler={inputHandler} input={input} onClickEventHandler={onClickEventHandler} removeItemFromCart={removeItemFromCart} itemsInCart={itemsInCart.length} addedItemsInCart={itemsInCart} />
            <main>
                <Routes>
                    <Route path='/' element={<Home addItemInCart={addItemInCart} />} />
                    <Route path='/mobile' element={<MobileItems addItemInCart={addItemInCart}/>}/>
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default Page;