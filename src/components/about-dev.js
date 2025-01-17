import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import personne from '../images/person_3.jpg';
import personne2 from '../images/person_4.jpg';
import personne3 from '../images/person-1.jpg';
// Mock data for testimonials
const testimonials = [
    {
        id: 1,
        name: "Abdelkhalek Essaid",
        role: "Developer and Engineer",
        content: "I am the designer and developer of this website, using React.js, Tailwind CSS, and Spring Boot to create a seamless, responsive, and user-friendly experience!",
        rating: 5,
        image: personne
    },
    {
        id: 2,
        name: "Hamza Alouani",
        role: "Tapis Creator",
        content: "Creates handcrafted Moroccan tapis and poufs, reflecting the rich culture and craftsmanship of Morocco for unique and stylish decor.",
        rating: 4,
        image: personne2
    },
    {
        id: 3,
        name: "Marouane el Amazighi",
        role: "Chelh hata nokha3",
        content: "The features offered by this platform have streamlined my property management process significantly.",
        rating: 5,
        image: personne3
    }
];

// Testimonial card component
const TestimonialCard = ({ name, role, content, rating, image, isVisible }) => (
    <div
        className={`bg-white p-6 rounded-lg shadow-md transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
    >
        <div className="flex items-center mb-4">
            <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
        <p className="text-gray-700 mb-4">{content}</p>
        <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
            ))}
        </div>
    </div>
);

const TestimonialSection = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null); // Ref for the section to observe

    useEffect(() => {
        // Initialize IntersectionObserver when the component mounts
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Once the section is visible, show testimonials with a delay
                    const showCards = () => {
                        testimonials.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleCards(prev => [...prev, index]); // Add the index of the card to visibleCards
                            }, index * 500); // 500ms delay between each card
                        });
                    };
                    showCards();
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer when the component is unmounted
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-title">
            <div className="max-w-7xl mx-auto">
                <h2 id="testimonials-title" className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                    Meet the Founder Behind Our Beautiful Moroccan Tapis and Poufs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            {...testimonial}
                            isVisible={visibleCards.includes(index)} // Control visibility based on delay
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
