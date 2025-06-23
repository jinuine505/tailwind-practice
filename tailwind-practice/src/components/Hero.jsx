const Hero = () => {
    return (
        <div>
            {/* Hero columns */}
            <div className="container flex flex-col md:flex-row pt-30 px-5 pb-5 mx-auto">
                {/* Left column */}
                <div className="w-full flex items-center text-5xl sm:text-7xl lg:text-8xl bg-orange">
                    <span className="flex p-5 text-cream items-center">
                        We Make Watches.
                    </span>
                </div>

                {/* Right column */}
                <div className="w-full">
                    <img src="src/assets/woodwatch-CFFrmpYPQbM-unsplash.jpg" alt="Watch" />
                </div>
            </div>

            {/* Bottom row */}
            <div className="container flex mx-auto px-5">
                <a className={`relative w-full flex justify-center bg-cream nav-link-bg duration-200 text-lg sm:text-2xl p-1 z-0 hover:text-cream hover:before:w-full`} href="#products">
                    See Our Watches
                </a>
            </div>
        </div>


    );
}

export default Hero;