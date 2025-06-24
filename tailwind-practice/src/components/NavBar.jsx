import { useState } from "react";
import { useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars, faX } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#products", label: "Products" }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 backdrop-blur-2xl shadow-md shadow-orange/40">
            {/* NavBar content */}
            <div className="flex w-full items-center justify-between p-2">
                {/* Logo */}
                <div className="w-13">
                    <a href="#home">
                        <img className="hover:scale-105 transition-transform duration-300 cursor-pointer" src="/watch-bros.png" alt="Watch Bros" />
                    </a>
                </div>

                {/* Navigation links */}
                <div className="hidden sm:flex items-center gap-5">
                    {navLinks.map((link, index) => (
                        <a className={`relative nav-link-bg-green duration-200 p-1 ${location.hash === link.href ? "text-cream before:w-full" : "hover:text-cream"}`} href={link.href} key={index}>
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Cart + menu bars container*/}
                <div className="flex items-center gap-2 ">
                    {/* Cart */}
                    <div className="">
                        <a className="relative nav-link-bg-green duration-200 p-2 cursor-pointer hover:text-cream"><FontAwesomeIcon icon={faCartShopping} /></a>
                    </div>

                    {/* Mobile menu bars */}
                    <button className={`relative nav-link-bg sm:hidden cursor-pointer ${isMenuOpen ? "text-cream before:w-full" : "hover:text-cream hover:before:w-full"} p-[5px] px-2.5`} onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                        {isMenuOpen ? <FontAwesomeIcon className="px-[0.9px]" icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
                    </button>
                </div>
            </div>

            {/* Mobile navigation links */}
            {isMenuOpen && <div className="sm:hidden items-center gap-5">
                {navLinks.map((link, index) => (
                    <a className={`relative block nav-link-bg duration-200 p-1 ${location.hash === link.href ? "text-cream before:w-full" : "hover:text-cream hover:before:w-full"}`} href={link.href} key={index}>
                        {link.label}
                    </a>
                ))}
            </div>}


        </nav>
    );
}

export default NavBar