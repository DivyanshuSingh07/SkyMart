import {
    RiFlashlightLine,
    RiShieldLine,
    RiPriceTag3Line
} from "react-icons/ri";

export default function Features() {

    const features = [
        {
            icon: <RiFlashlightLine />,
            title: "Fast Delivery",
            text: "Same-day on select items."
        },

        {
            icon: <RiShieldLine />,
            title: "Secure Payments",
            text: "100% encrypted checkout."
        },

        {
            icon: <RiPriceTag3Line />,
            title: "Best Prices",
            text: "Price-match guarantee."
        }
    ];

    return (
        <section className="features">

            {
                features.map((item) => (

                    <div
                        key={item.title}
                        className="feature-card"
                    >
                        <div>
                            {item.icon}
                        </div>

                        <div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </div>

                    </div>
                ))
            }

        </section>
    );
}