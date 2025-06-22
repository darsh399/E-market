import Input from "../common/Input";
import Button from "../common/Button";
import { useGlobalUiContext } from "../Context/GlobalUiContextProvider";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
    const { isLoggedIn, showNotification, loggedInHandler } = useGlobalUiContext();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const inputHandler = (e) => {
        setPassword(e.target.value);
    };

    const formHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.delete(
                `http://localhost:5000/api/v1/user/delete-user/${isLoggedIn._id}`,
                {
                    data: { password },
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                showNotification('User deleted successfully..', 'success');
                loggedInHandler(null); 
                navigate('/userLogin'); 
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={formHandler}>
            <h1>{isLoggedIn?.name}, really want to delete Account?</h1>
            <Input
                type='input'
                value={password}
                onChangeInput={inputHandler}
                placeholder='Enter Your Password'
            />
            <Button type='submit'>DELETE USER</Button>
        </form>
    );
};

export default DeleteUser;
