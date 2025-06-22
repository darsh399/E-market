import Input from "../common/Input";
import Button from "../common/Button";
import { useGlobalUiContext } from "../Context/GlobalUiContextProvider";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DeleteUser.css";

const DeleteUser = () => {
  const { isLoggedIn, showNotification, loggedInHandler, setitemsInCart } = useGlobalUiContext();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (e) => setPassword(e.target.value);

  const formHandler = async (e) => {
    e.preventDefault();

    if (!password.trim()) {
      showNotification("Password is required", "error");
      return;
    }

    const confirm = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirm) return;

    setLoading(true);
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/v1/user/delete-user/${isLoggedIn._id}`,
        {
          data: { password },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        showNotification('User deleted successfully.', 'success');
        loggedInHandler(null);
        setitemsInCart([]);
        navigate('/userLogin');
      } else {
        showNotification(res.data.message || "Failed to delete user", "error");
      }
    } catch (error) {
      showNotification(error.response?.data?.message || "Something went wrong", "error");
      console.error("Delete failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={formHandler} className="delete-user-form">
      <h1>
        {isLoggedIn?.name}, are you sure you want to delete your account?
      </h1>

      <Input
        type="input"
        typeText="password"
        value={password}
        onChangeInput={inputHandler}
        placeholder="Enter your password"
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Deleting..." : "DELETE USER"}
      </Button>
    </form>
  );
};

export default DeleteUser;
