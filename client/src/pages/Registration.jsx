import { useState, useContext } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

import { useAuth } from "../store/auth";

export const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLs } = useAuth();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(user); // For now, just logging the user object

        try {
            const response = await fetch(`http://localhost:3000/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json", // Corrected typo in 'Content-Type'
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            console.log("res from server", data.message);
            toast.error(data.extraDetails ? data.extraDetails : data.message);
            // Check if response is successful
            if (response.ok) {
                // If successful, do something with the response
                // localStorage.setItem("token", data);
                storeTokenInLs(data.token);
                // toast.success("Registration successful")
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                navigate("/");
                // console.log(response);
            } else {
                // If not successful, throw an error
                toast.error('Registration failed');
            }
        } catch (error) {
            console.log('register', error);
        }
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src="/images/3691028.jpg" alt="Register" width={500} height={400} />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">
                                Registration Form
                            </h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">UserName</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Enter Your Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Enter Your Phone:</label>
                                    <input
                                        type="phone"
                                        name="phone"
                                        placeholder="phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Enter Your password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
