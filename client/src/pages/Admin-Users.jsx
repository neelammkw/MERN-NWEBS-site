import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import './Adminuser.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/users', {
        method: 'GET',
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.log('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.log('Error in getting user data', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/delete/${id}`, {
        method: 'DELETE',
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`User after delete:`, data);
        alert('Deleted User');
        // Refresh user data after deletion
        getAllUserData();
      } else {
        console.log('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []); // Fetch user data only once on component mount

  return (
    <>
      <section className="admin-users-section">
        <div className="admin-container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="admin-container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser) => (
                <tr key={curUser._id}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td className='btn'>
                    <Link to={`/admin/users/${curUser._id}/edit`} className='navlink'>Update</Link>
                  </td>
                  <td className='btn'>
                    <Link onClick={() => deleteUser(curUser._id)} className='navlink'>Delete</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
