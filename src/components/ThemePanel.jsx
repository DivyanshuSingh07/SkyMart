import { useTheme } from "../Context/ThemeContext";

export default function ThemePanel() {

    const { theme, setTheme } =
    useTheme();

    const themes = [
    {
        id:"dark",
        name:"Dark Mode"
    },
    // {
    //     id:"light",
    //     name:"Light Mode"
    // },
    {
        id:"cyber",
        name:"Cyber Neon"
    },
    {
        id:"midnight",
        name:"Midnight Blue"
    },
    {
        id:"royal",
        name:"Royal Purple"
    }
];

    return(

        <div className="theme-panel">

            <h3>
                Appearance
            </h3>

            {
                themes.map(item => (

                   <button
                    key={item.id}
                    className={`
                        theme-option
                        ${theme === item.id ? "active-theme" : ""}
                    `}
                    onClick={() => setTheme(item.id)}
                >
                    <span>{item.name}</span>

                    {theme === item.id && (
                        <span className="theme-check">
                            ✓
                        </span>
                    )}
                </button>
                ))
            }

        </div>
    );
}
