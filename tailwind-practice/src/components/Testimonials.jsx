import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/pagination";
import jerry from "../assets/pexels-cottonbro-6551763.jpg"
import david from "../assets/pexels-cottonbro-6626882.jpg"
import serena from "../assets/pexels-cottonbro-6962024.jpg"
import melissa from "../assets/pexels-dziana-hasanbekava-7275385.jpg"
import thomas from "../assets/pexels-gabby-k-5384445.jpg"

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jerry S.",
            photo: jerry,
            rating: 5,
            header: "Absolutely love it!",
            review: "I've owned a few automatic watches, but none feel as well-crafted as this. It has a satisfying weight and the movement is buttery smooth. I get compliments all the time!"
        },
        {
            name: "David L.",
            photo: david,
            rating: 5,
            header: "Built to last and looks amazing",
            review: "You can tell right away this isn't a mass-produced watch. The sapphire caseback is stunning, and the materials feel premium. It's my daily wear now."
        },
        {
            name: "Serena K.",
            photo: serena,
            rating: 5,
            header: "Mechanical art on my wrist",
            review: "The exposed movement is a showstopper. I love seeing the mechanics tick away every day. It's a conversation piece in every interaction."
        },
        {
            name: "Melissa P.",
            photo: melissa,
            rating: 5,
            header: "Great value for a mechanical watch",
            review: "For the price, the quality is unbeatable. It runs accurately, feels durable, and the minimalist design pairs with anything I wear."
        },
        {
            name: "Thomas R.",
            photo: thomas,
            rating: 5,
            header: "Feels like a boutique watch",
            review: "This feels like something I'd pay triple for in a retail store. The transparent back, the smooth winding, and even the packaging were all top-notch."
        }
    ]

    return (
        <div className="container px-5 mx-auto pb-10">
            {/* Label */}
            <div className="flex items-center justify-center p-1 z-10 text-lg sm:text-2xl font-medium bg-orange text-cream">
                What People Are Saying
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                mousewheel={{
                    enabled: true
                }}
                modules={[Pagination, Mousewheel]}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="p-5 mb-10 bg-cream">
                        {/* Testimonial container */}
                        <div className="flex flex-row gap-5">
                            {/* Left column */}
                            <div className="flex flex-col justify-center min-w-fit">
                                {/* Testimonial photo */}
                                <div className="flex justify-center">
                                    <img src={testimonial.photo} alt={testimonial.name} className="w-20 rounded-full hover:scale-105 duration-200" />
                                </div>
                                {/* Testimonial rating */}
                                <div>
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <span key={index}>
                                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="flex flex-col justify-center">
                                <h2 className="font-bold italic">{`"${testimonial.header}"`}</h2>
                                <p>{testimonial.review}</p>
                                <p>{`- ${testimonial.name}`}</p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Testimonials;