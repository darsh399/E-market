import { useState } from 'react';
import Input from "../../common/Input";
import Button from '../../common/Button';
import axios from 'axios';
import './AddItem.css';

const AddItem = ({ fetchItems }) => {
    const [formData, setFormData] = useState({
        productName: '',
        productCateogery: '',
        productPrice: '',
        productImage: null,
        productQuantity: '',
        productIsAvailable: '',
        productDescription: ''
    });

    const inputHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const fileInputHandler = (e) => {
        setFormData({
            ...formData,
            productImage: e.target.files[0]
        });
    };

    const formHandler = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        formPayload.append('productName', formData.productName);
        formPayload.append('productCateogery', formData.productCateogery);
        formPayload.append('productPrice', formData.productPrice);
        formPayload.append('productImage', formData.productImage);
        formPayload.append('productQuantity', formData.productQuantity);
        formPayload.append('productIsAvailable', formData.productIsAvailable === 'Yes');
        formPayload.append('productDescription', formData.productDescription);

        try {
            const res = await axios.post('http://localhost:5000/api/v1/item/addItem', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setFormData({
                productName: '',
                productCateogery: '',
                productPrice: '',
                productImage: null,
                productQuantity: '',
                productIsAvailable: '',
                productDescription: ''
            });

            alert('Item added successfully!');
            fetchItems();
            console.log(res);
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Failed to add item", error.response?.data?.message || "Server error");
        }
    };

    return (
        <form className="add-item-form" onSubmit={formHandler}>
            <h2 className="form-heading">Add New Product</h2>

            <span>Product Name:</span>
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
                <option value="air conditioner">AC</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="Tv">TV</option>
                <option value="mobile">Mobile</option>
            </select>

            <span>Product Price:</span>
            <Input
                type='input'
                placeholder='Enter Product Price'
                typeText='number'
                value={formData.productPrice}
                name='productPrice'
                onChangeInput={inputHandler}
            />

            <span>Product Description:</span>
            <Input
                type='input'
                placeholder='Enter Product Description'
                value={formData.productDescription}
                name='productDescription'
                onChangeInput={inputHandler}
            />

            <span>Product Image:</span>
            <input
                type='file'
                accept='image/*'
                name='productImage'
                onChange={fileInputHandler}
            />

            <span>Product Quantity:</span>
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
    );
};

export default AddItem;
