import React, { useState, createContext, useContext, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token")); // Corrected the argument passed to localStorage.getItem()
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authorizationToken = `Bearer ${token}`;
    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);

    };

    let isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };
    //jwt authentication to get the user data logged in
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:3000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }
            else {
                setIsLoading(false);
                console.log("Error Fetcing Data")
            }
        } catch (error) {
            console.log("Error fetcing user Data")
        }
    }
    const getServices = async () => {
        try {

            const res = await fetch('http://localhost:3000/api/data/service', {
                method: "GET",
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                setServices(data);

            }
        } catch (error) {
            console.log(`service frontened ${error}`);
        }
    }
    useEffect(() => {
        getServices();
        userAuthentication();

    }, []);

    // Provide the context value
    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLs, LogoutUser, user, services, authorizationToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
