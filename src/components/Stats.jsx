import {
    RiShoppingBagLine,
    RiBarChartBoxLine,
    RiStarLine,
    RiPriceTag3Line
} from "react-icons/ri";

export default function Stats() {

    const stats = [
        {
            icon: <RiShoppingBagLine />,
            value: "0",
            title: "Cart Items",
            subtitle: "In your bag"
        },

        {
            icon: <RiBarChartBoxLine />,
            value: "$0",
            title: "Cart Value",
            subtitle: "Ready to checkout"
        },

        {
            icon: <RiStarLine />,
            value: "5",
            title: "Top Products",
            subtitle: "Highly rated"
        },

        {
            icon: <RiPriceTag3Line />,
            value: "6",
            title: "Categories",
            subtitle: "To explore"
        }
    ];

    return (
        <section className="stats">

            {
                stats.map((item, index) => (

                    <div
                        key={index}
                        className="stat-card"
                    >

                        <div className="stat-icon">
                            {item.icon}
                        </div>

                        <div>

                            <h2>
                                {item.value}
                            </h2>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.subtitle}
                            </p>

                        </div>

                    </div>
                ))
            }

        </section>
    );
}