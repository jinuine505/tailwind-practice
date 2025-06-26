import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const footerNavLinks = {
        "Company": [
            { title: "Our Story", href: "#" },
            { title: "Our Blog", href: "#" },
            { title: "Reviews", href: "#" },
            { title: "Watch Club", href: "#" },
        ],
        "Shop": [
            { title: "Shop All", href: "#" },
            { title: "Shop Best Sellers", href: "#" },
            { title: "Shop Men's", href: "#" },
            { title: "Shop Women's", href: "#" },
        ],
        "Customer Service": [
            { title: "FAQ", href: "#" },
            { title: "Shipping Policy", href: "#" },
            { title: "Returns", href: "#" },
            { title: "Contact Us", href: "#" },
        ]
    }

    return (
        <footer className="p-5 bg-cream">
            {/* Footer columns container */}
            <div className="flex flex-col md:flex-row">
                {/* Company info column */}
                <div>
                    {/* Newsletter */}
                    <div className="">
                        <h2 className="font-bold">Quick Signup For Big Savings</h2>
                        <p>Subscribe to our newsletter for 15% off your first purchase and more exclusive offers.</p>
                        <form className="flex flex-row gap-2 pt-2" action="">
                            <input className="w-full p-1 bg-orange text-cream focus:outline-green" type="text" placeholder="Email" />
                            <button type="submit" className="relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer bg-orange text-cream">Submit</button>
                        </form>
                    </div>
                    {/* Social media */}
                    <div className="flex items-center text-2xl gap-5 py-2">
                        <a className="flex relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer hover:text-cream" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="flex relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer hover:text-cream" href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className="flex relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer hover:text-cream" href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a className="flex relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer hover:text-cream" href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                    </div>
                </div>

                {/* Footer navigation column */}
                <div className="flex p-2 flex-col sm:flex-row sm:justify-around w-full">
                    {Object.entries(footerNavLinks).map(([title, links], index) => (
                        <div className="pb-2" key={index} >
                            {/* Label */}
                            <h2 className="font-bold bg-orange text-cream w-fit p-1">{title}</h2>
                            {/* Links */}
                            <ul>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a className="relative nav-link-bg-green duration-200 p-1 z-1 cursor-pointer hover:text-cream" href={link.href}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>


            {/* Footer bottom */}
            <div>
                <p className="flex text-sm items-center justify-center">© 2025 WatchBros All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;