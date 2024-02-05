import "../App.css";
// const { Services } = require("../controllers/service-controller");
import { useAuth } from "../store/auth";

export const Services = () => {
    const { services } = useAuth();

    return <section className="section-services">
        <div>
            <h1 className="heading">Services</h1>
        </div>

        <div className="container grid grid-three-cols">
            {
                services.map((curelem, index) => {
                    const { price, description, provider, service } = curelem;

                    return (<div className="card" key={index}>
                        <div className="card-img">
                            <img src="./images/2.png" alt="our services info" width="{80}" />

                        </div>
                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p>
                                    {provider}
                                </p>
                                <p>{price}</p>
                            </div>
                            <h2>{service}</h2>
                            <p>{description}</p>
                        </div>
                    </div>);
                })

            }


        </div>
    </section>
}