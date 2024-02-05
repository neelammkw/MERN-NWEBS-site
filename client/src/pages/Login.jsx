import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify"

export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: "", 
    });
    const navigate = useNavigate();
    const  {storeTokenInLs} = useAuth();


    const handleInput = (e) => {
        const { name, value } = e.target;
        setLogin({
            ...login,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(user); // For now, just logging the user object
        try {
            const response = await fetch(`http://localhost:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json", // Corrected typo in 'Content-Type'
                },
                body: JSON.stringify(login),
            });

            const data = await response.json();
            // Check if response is successful
            if (response.ok) {
                
                // If successful, do something with the response
                toast.success("Login Successful");
                //  const data= await response.json();
                // localStorage.setItem("token", data.token);
                storeTokenInLs(data.token);

                setLogin({
                    email: "",
                    password: "",
                });
                navigate("/");
                // console.log(response);
            } else {
                // If not successful, throw an error
                toast.error(data.extraDetails ? data.extraDetails : data.message);
                throw new Error('Login failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
    
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src="/images/3691028.jpg" alt="Login" width={500} height={400} />
                        </div>
                    
                        <div className="registration-form">
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
                                        value={login.email}
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
                                        value={login.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
