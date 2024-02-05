import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import './Adminuser.css';

const AdminUpdateUser = () => {
    const { id } = useParams();
    //   const history = useHistory();
    const navigate = useNavigate();
    const { authorizationToken } = useAuth();
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
                    method: 'GET',
                    headers: { Authorization: authorizationToken },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    console.error('Failed to fetch user');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [id, authorizationToken]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/api/admin/users/update/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                alert('User updated successfully');
                navigate('/admin/users'); // Redirect to user list after successful update
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className='updateform'>
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default AdminUpdateUser;
