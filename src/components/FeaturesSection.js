import { Truck, ShoppingBag, HeadphonesIcon, RefreshCw } from 'lucide-react';
import wom from "../images/wom.webp";
import { useEffect, useState, useRef } from "react";

export default function FeaturesSection() {
    const [isVisible, setIsVisible] = useState(false); // Track if the image is in view
    const imageRef = useRef(null);

    // Intersection Observer to detect when the image is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set to true when the image is in view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the image is in view
        );

        if (imageRef.current) {
            observer.observe(imageRef.current); // Start observing the image
        }

        // Cleanup observer on unmount
        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    const features = [
        {
            icon: Truck,
            title: 'Fast & Free Shipping',
            description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
        },
        {
            icon: ShoppingBag,
            title: 'Easy to Shop',
            description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
        },
        {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
        },
        {
            icon: RefreshCw,
            title: 'Hassle Free Returns',
            description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 grid grid-cols-8 gap-2">
                {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full" />
                ))}
            </div>

            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
                        <p className="text-gray-600 mb-12">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="relative h-[600px]">
                        <img
                            ref={imageRef} // Add the ref to the image element
                            src={wom}
                            alt="Modern interior with sofa and pendant lamp"
                            className={`object-cover rounded-lg w-full h-full transition-all duration-700 ${
                                isVisible ? "animate__animated animate__fadeInRight" : "opacity-0"
                            }`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
