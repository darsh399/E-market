import { useState, useEffect } from 'react';
import './UserUpdatePage.css';
import Input from '../common/Input';
import Button from '../common/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGlobalUiContext } from '../Context/GlobalUiContextProvider';

const UserUpdatePage = () => {
    const {isLoggedIn, showNotification, updateLoggedInUser} = useGlobalUiContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
    });

    useEffect(() => {
        if (isLoggedIn) {
            setFormData({
                name: isLoggedIn.name || '',
                email: isLoggedIn.email || '',
                mobileNo: isLoggedIn.mobileNo || '',
            });
        }
    }, [isLoggedIn]);

    const onChangeInputHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `http://localhost:5000/api/v1/user/users/${isLoggedIn.id}`,
                formData
            );
            updateLoggedInUser({ ...formData, id: isLoggedIn.id });
            showNotification('User Updated Successfully..', 'success');
            navigate('/');
            
        } catch (error) {
            showNotification('Error in updating' , error.response?.data )
            console.error('Error updating user:', error.response?.data || error.message);
        }
    };


    return (
        <form className="user-update-form" onSubmit={formSubmitHandler}>
            <Input
                type="input"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChangeInput={onChangeInputHandler}
            />
            <Input
                type="input"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChangeInput={onChangeInputHandler}
            />
            <Input
                type="input"
                name="mobileNo"
                placeholder="Enter mobile number"
                value={formData.mobileNo}
                onChangeInput={onChangeInputHandler}
            />

            <Button type='submit'>SAVE</Button>
        </form>
    );
};

export default UserUpdatePage;
