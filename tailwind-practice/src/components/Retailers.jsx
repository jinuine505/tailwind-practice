import amazon from "../assets/Amazon Logo.png"
import costco from "../assets/Costco Logo.png"
import sams from "../assets/Sam's Club Logo.png"
import bestbuy from "../assets/Best Buy Logo.png"
import target from "../assets/Target Logo.png"
import walmart from "../assets/Walmart Logo.png"
import macys from "../assets/Macy's Logo.png"

const Retailers = () => {
    const retailers = [
        amazon,
        costco,
        sams,
        target,
        bestbuy,
        walmart,
        macys
    ];

    return (
        <div className="container mx-auto flex flex-col px-5 pb-5">
            {/* Label */}
            <div className="flex items-center justify-center p-1 z-10 text-lg sm:text-2xl bg-orange text-cream">
                Find Us At
            </div>
            {/* Marquee wrapper */}
            <div className="flex w-full overflow-hidden p-2 bg-cream">
                {/* Retailers */}
                <div className="animate-marquee flex items-center pl-30 space-x-30">
                    {retailers.map((retailer, index) => (
                        <img src={retailer} alt="retailers logo" key={index} className="max-w-none h-10 transition-all hover:scale-105" />
                    ))}
                </div>
                {/* Duplicate logos for smooth srolling */}
                <div className="animate-marquee flex items-center pl-30 space-x-30">
                    {retailers.map((retailer, index) => (
                    <img src={retailer} alt="retailers logo" key={`dup-${index}`} className="max-w-none h-10 transition-all hover:scale-105" />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Retailers;