import React from "react";
import ItemList from "../../Data/ItemList";
const Home = ({addItemInCart, error, fetchedItems}) =>{
    return(
        <div>
            <ItemList fetchedItems={fetchedItems} error={error} addItemInCart={addItemInCart}/>
        </div>
    )
}

export default Home;