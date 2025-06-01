import { useState } from 'react';
import Input from "../../common/Input";
import Button from '../../common/Button';
import axios from 'axios';
import './AddItem.css';

const AddItem = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productCateogery: '',
        productPrice: '',
        productImage: '',
        productQuantity: '',
        productIsAvailable: '',
        productDescription: ''
    });

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const formHandler = async (e) => {
        e.preventDefault();
  console.log(formData)
        const cleanData = {
            ...formData,
            productPrice: Number(formData.productPrice),
            productQuantity: Number(formData.productQuantity),
            productIsAvailable: formData.productIsAvailable === 'Yes'
        };

        try {
            const res = await axios.post('http://localhost:5000/api/v1/item/addItem', cleanData);
            setFormData({
                productName: '',
                productCateogery: '',
                productPrice: '',
                productImage: '',
                productQuantity: '',
                productIsAvailable: '',
                productDescription: ''
            });
            alert('Item added successfully..');
            console.log(res);
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Registration failed", error.response?.data?.message || "Server error");
        }
    }

    return (
        <form className="add-item-form" onSubmit={formHandler}>
            <Input
                type='input'
                placeholder='Enter Product Name'
                value={formData.productName}
                name='productName'
                onChangeInput={inputHandler}
            />

            <span>Product Category:</span>
            <select name="productCateogery" value={formData.productCateogery} onChange={inputHandler}>
                <option value="">Select</option>
                <option value="air conditioner">Ac</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="Tv">Tv</option>
                <option value="mobile">mobile</option>
            </select>

            <Input
                type='input'
                placeholder='Enter Product Price'
                typeText='number'
                value={formData.productPrice}
                name='productPrice'
                onChangeInput={inputHandler}
            />

            <Input
                type='input'
                placeholder='Enter Product Description'
                value={formData.productDescription}
                name='productDescription'
                onChangeInput={inputHandler}
            />

            <Input
                type='input'
                placeholder='Enter Product Image'
                value={formData.productImage}
                name='productImage'
                onChangeInput={inputHandler}
            />

            <Input
                type='input'
                placeholder='Enter Product Quantity'
                typeText='number'
                value={formData.productQuantity}
                name='productQuantity'
                onChangeInput={inputHandler}
            />

            <div className="radio-group">
                <span>Product Available:</span>
                <input
                    type="radio"
                    name="productIsAvailable"
                    value="Yes"
                    checked={formData.productIsAvailable === "Yes"}
                    onChange={inputHandler}
                />
                <span>Yes</span>
                <input
                    type="radio"
                    name="productIsAvailable"
                    value="No"
                    checked={formData.productIsAvailable === "No"}
                    onChange={inputHandler}
                />
                <span>No</span>
            </div>

            <Button type='submit'>ADD ITEM</Button>
        </form>
    )
}

export default AddItem;
