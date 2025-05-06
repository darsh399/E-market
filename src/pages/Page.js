import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import NavList from '../Header/Navbar/NavList';
import ItemList from '../Data/ItemList';
const Page = ({children})=> {
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
       const isDuplicate = prevData.some((item)=> item.id === newData.id);
       return isDuplicate ? prevData : [...prevData, newData];
    })
    }

    return(
        <div>
            <Header inputHandler={inputHandler} input={input} onClickEventHandler={onClickEventHandler} removeItemFromCart={removeItemFromCart}  itemsInCart={itemsInCart.length} addedItemsInCart={itemsInCart}/>
            <NavList/>
            <ItemList  addItemInCart={addItemInCart}/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Page;