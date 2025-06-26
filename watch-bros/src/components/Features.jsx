import movement from "../assets/pexels-tima-miroshnichenko-8327874.jpg"
import watchBack from "../assets/pexels-quang-viet-nguyen-107013384-9561398.jpg"
import forest from "../assets/johannes-plenio-Enhs8UrXEb0-unsplash.jpg"
import { easeInOut, easeOut, motion } from "motion/react"

const Features = () => {
    const features = [
        {
            img: movement,
            description: "All Watch Bros watches contain our hand assembled automatic movement. No need for manual winding."
        },
        {
            img: watchBack,
            description: "We embrace the mechanical beauty of watches and offer clear and durable sapphire casebacks for all models."
        },
        {
            img: forest,
            description: "We only use high quality materials that are ethically sourced, and guaranteed to last a lifetime."
        }
    ]

    return (
        <div className="container mx-auto px-5 pb-10">
            {/* Label */}
            <div className="flex items-center justify-center p-1 z-10 text-lg sm:text-2xl font-medium bg-orange text-cream">
                Why Choose Our Watches
            </div>
            {/* Features container */}
            <div className="p-5 pb-0 bg-cream">
                {features.map((feature, index) => (
                    <motion.div initial={{opacity: 0}} transition={{duration: 2}} viewport={{once: true, amount: 0.5}} whileInView={{opacity: 1}}>
                        <div key={index} className="flex flex-col md:flex-row md:items-stretch pb-5 items-center transition-all hover:scale-101">
                            {/* Feature image */}
                            <div className="md:w-3/4 lg:w-1/4">
                                <img src={feature.img} alt="Feature Image" />
                            </div>
                            {/* Feature description */}
                            <div className="text-center md:text-start flex w-full items-center font-medium p-5 md:text-xl lg:text-2xl bg-orange text-cream">
                                {feature.description}
                            </div>
                        </div>
                    </motion.div>

                ))}
            </div>
        </div>
    );
}

export default Features;