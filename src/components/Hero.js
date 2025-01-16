import React, { useEffect, useState } from "react";
import zarbia from "../images/poof.png";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    // Create an Intersection Observer to detect when the Hero section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set visibility when the element is in view
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        const heroSection = document.getElementById("hero-section");
        if (heroSection) {
            observer.observe(heroSection); // Start observing the Hero section
        }

        // Cleanup observer on component unmount
        return () => {
            if (heroSection) {
                observer.unobserve(heroSection);
            }
        };
    }, []);

    return (
        <section
            id="hero-section"
            className="h-[87vh] flex items-center justify-center bg-[#765f48] text-white overflow-hidden"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Content */}
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1
                        className={`${isVisible
                                ? "animate__animated animate__fadeInLeft"
                                : "opacity-0"
                            } text-3xl md:text-5xl font-bold max-w-2xl mb-6`}
                    >
                        Authentic Moroccan Tapestries & Poufs
                    </h1>
                    <p
                        className={`${isVisible
                                ? "animate__animated animate__fadeInLeft"
                                : "opacity-0"
                            } text-gray-300 max-w-xl mb-8`}
                    >
                        Discover the beauty and craftsmanship of traditional Moroccan
                        zarbia tapestries and poufs. Our collection features handmade,
                        vibrant designs that bring a touch of Moroccan culture and elegance
                        to your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="/shop"
                            className="px-8 py-3 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors"
                        >
                            Shop Now
                        </a>
                        <a
                            href="/explore"
                            className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
                        >
                            Explore
                        </a>
                    </div>
                </div>

                {/* Right Content (Image) */}
                <div className="relative w-full md:block">
                    <img
                        src={zarbia}
                        alt="Beautiful Moroccan tapestry and interior decor"
                        className={`${isVisible
                                ? "animate__animated animate__zoomIn"
                                : "opacity-0"
                            } object-cover w-full h-full rounded-lg transform hover:scale-105 transition-transform duration-700`}
                    />
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 pointer-events-none" />

                    {/* Decorative dots pattern */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
