// import { useState } from "react";
import React from 'react';
import "../App.css";

export const Home = () => {
    // const [user, setUser] = useState({
    //     email: "",
    //     password: "", 
    // });

    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     setUser({
    //         ...user,
    //         [name]: value,
    //     });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(user); // For now, just logging the user object
    };

    return (
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src="/images/3691028.jpg" alt="Login" width={500} height={400} />
                        </div>
                        {/* <div className="registration-form">
                            <h1 className="main-heading mb-3">
                                Login
                            </h1>
                            <br />
                            <form onSubmit={handleSubmit}>
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
                                    Login
                                </button>
                            </form>
                        </div> */}
                    </div>
                </div>
            </main>
        </section>
    );
};
