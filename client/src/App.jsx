import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Registration } from "./pages/Registration";
import { Services } from "./pages/Services";
import React from 'react';
import { Navbar } from "./components/Navbar";
import Error from "./pages/Error";
import { Logout } from './pages/Logout';
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import AdminUpdateUser from "./pages/Admin-update";
// import { useParams } from 'react-router-dom';

// import { Navbar } from "./components/Navbar";
const App = () => {
  // const { id } = useParams();

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id/edit" element={<AdminUpdateUser />} />
          <Route path="contacts" element={<AdminContacts/>} />
        </Route>
      </Routes>
    </BrowserRouter></>;
}
export default App;