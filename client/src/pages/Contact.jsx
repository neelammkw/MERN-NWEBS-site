import { useState } from "react";
import "../App.css";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);
    const [userData, setUserData] = useState(true);
    const { user } = useAuth();
    if (user && userData) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        })
        setUserData(false);
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(contact); // For now, just logging the user object
try {
    const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(contact)
    })
if(response.ok){
    alert("Message Sent!");
    setContact(defaultContactFormData);

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
                            <img src="/images/3691028.jpg" alt="Contact" width={500} height={400} />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">
                                Contact Us
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
                                        value={contact.username}
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
                                        value={contact.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        type="textarea"
                                        name="message"
                                        rows="7"
                                        placeholder="message"
                                        cols="75"
                                        id="message"
                                        required
                                        autoComplete="off"
                                        value={contact.message}
                                        onChange={handleInput}
                                    ></textarea>
                                </div>

                                <br />
                                <button type="submit" className="btn btn-submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};
