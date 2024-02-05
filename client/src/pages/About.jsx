import "../App.css";
import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();
    return (<>
        <section>
            <main>
                <div className="section-about">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img src="/images/3691028.jpg" alt="Login" width={500} height={400} />
                        </div>
                        <section className="about"> <h2>
                            Welcome, {user ? `${user.username} to Our Website` : `to our website`}
                        </h2>
                            <p>
                                Enthusiastic and dedicated professional aspiring to embark on a fulfilling career as a programmer or web developer within a dynamic and challenging work environment. Having taken a pause to prioritize family responsibilities, I am now reinvigorated and committed to contributing my passion, renewed skills, and continuous learning mindset to add significant value to an innovative organization.
                            </p></section>
                    </div>
                </div>
            </main>
        </section>
    </>);

};