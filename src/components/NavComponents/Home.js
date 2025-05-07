import React from "react";
import ItemList from "../../Data/ItemList";
const Home = ({addItemInCart}) =>{
    return(
        <div>
            <ItemList addItemInCart={addItemInCart}/>
        </div>
    )
}

export default Home;