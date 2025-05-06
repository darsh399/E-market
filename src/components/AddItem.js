import React from "react";
import Input from "../common/Input";
const AddItem = ({type, name, value}) =>{
    return(
        <div>
            <Input placeholder='Enter Product Name' />
        </div>
    )
}

export default AddItem;