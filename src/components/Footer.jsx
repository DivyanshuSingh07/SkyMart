import {
    RiGithubFill,
    RiLinkedinBoxFill,
    RiTwitterXFill,
    RiMailLine
} from "react-icons/ri";

import { NavLink } from "react-router";

export default function Footer() {

    return(

        <footer className="footer">

            <div className="footer-top">

                <h2>
                    SkyMart
                </h2>

                <p>
                    Premium shopping platform
                    built using React, Context API
                    and modern UI practices.
                </p>

            </div>

            <div className="footer-links">

                <div>

                    <h3>
                        Quick Links
                    </h3>

                    <NavLink to="/home">
                        Home
                    </NavLink>

                    <NavLink to="/shop">
                        Shop
                    </NavLink>

                    <NavLink to="/wishlist">
                        Wishlist
                    </NavLink>

                    <NavLink to="/cart">
                        Cart
                    </NavLink>

                </div>

                <div>

                    <h3>
                        Connect
                    </h3>

                    <a
                        href="https://github.com/DivyanshuSingh07"
                        target="_blank"
                    >
                        <RiGithubFill />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/divyanshu-singh-a453a21a4/"
                        target="_blank"
                    >
                        <RiLinkedinBoxFill />
                        LinkedIn
                    </a>

                    <a
                        href="https://x.com/div_yan_shu"
                        target="_blank"
                    >
                        <RiTwitterXFill />
                        X
                    </a>

                    <a
                        href="mailto:mail2divyanshusingh@gmail.com"
                    >
                        <RiMailLine />
                        Email
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 SkyMart
                </p>

                <p>
                    Designed & Developed by
                    <span>
                        {" "}Divyanshu
                    </span>
                </p>

                <p>
                    React • Vite • Context API
                </p>

            </div>

        </footer>
    );
}