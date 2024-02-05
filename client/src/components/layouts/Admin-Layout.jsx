import React from 'react'
import { NavLink, Navigate, Outlet } from 'react-router-dom'
import "./Admin.scss"
import { FaUser } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { HiMiniHome } from "react-icons/hi2";
import { useAuth } from '../../store/auth';

const AdminLayout = () => {

  const {user, isLoading} = useAuth();

  if(isLoading) {
    return <h1> Loading.....</h1>
  }

  if(!user.isAdmin){
  return <Navigate  to="/" />
}

  return (<>
    <div>
      <div className="layout-container">

        <div className='navbar'>
          {/* <nav> */}
          <NavLink to="/"><HiMiniHome />&nbsp;  Home</NavLink>
          <NavLink to="/admin/users"><FaUser />&nbsp; users</NavLink>
          <NavLink to="/admin/contacts"><RiMessage3Fill />&nbsp;  contacts</NavLink>
          {/* <NavLink to="/admin/services"><GrServices />services</NavLink> */}

        </div>
        <div className='section'>
          < Outlet />
        </div>


      </div>

    </div>
  </>
  )
}

export default AdminLayout
