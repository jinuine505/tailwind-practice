const Hero = () => {
    return (
        <div>
            {/* Hero columns */}
            <div className="w-full flex flex-col md:flex-row pt-30 pb-5 mx-auto">
                {/* Left column */}
                <div className="w-full flex items-center text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-orange">
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
            <div className="container flex mx-auto pb-2 px-5">
                <a className={`relative w-full flex justify-center bg-cream nav-link-bg-green duration-200 text-lg sm:text-2xl p-1 z-0 font-medium hover:text-cream`} href="#products">
                    All Watches
                </a>
            </div>
            <div className="container flex mx-auto pb-10 gap-2 px-5">
                <a className={`relative w-full flex justify-center bg-cream nav-link-bg-green duration-200 text-lg sm:text-2xl p-1 z-0 font-medium hover:text-cream`} href="#products">
                    Men's
                </a>
                <a className={`relative w-full flex justify-center bg-cream nav-link-bg-green duration-200 text-lg sm:text-2xl p-1 z-0 font-medium hover:text-cream`} href="#products">
                    Women's
                </a>
            </div>
        </div>


    );
}

export default Hero;