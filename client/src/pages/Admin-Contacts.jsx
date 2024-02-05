import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';
import './Adminuser.css';

const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/contacts", {
        method: 'GET',
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        const data = await response.json();
        setContactData(data);
      } else {
        console.log('Failed to fetch contact data:', response.statusText);
      }
    } catch (error) {
      console.log(error)
    }
  };
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts/delete/${id}`, {
        method: 'DELETE',
        headers: { Authorization: authorizationToken },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`Contact after delete:`, data);
        alert('Deleted Contact');
        // Refresh user data after deletion
        getContactData();
      } else {
        console.log('Failed to delete contact:', response.statusText);
      }
    } catch (error) {
      console.log('Error deleting contact:', error);
    }
  };
  useEffect(() => {
    getContactData();
  }, []);

  return (
    <>    <div className='admin-contact-section'>
      <h1>All Contacts Messages</h1>
      <table className='contact-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((curContactData, index) => {
            const { _id, username, email, message } = curContactData;
            return (
              <tr key={index}>
                <td>{username}</td>
                <td>{email}</td>
                <td>{message}</td>
                <td className='btn'>
                  <Link onClick={() => deleteContactById(_id)} className="delete-link"
>Delete</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminContacts;
