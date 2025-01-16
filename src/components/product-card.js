import { useState, useEffect, useRef } from 'react';
import 'animate.css';

// ProductCard Component
export default function ProductCard({ product, onClick, index }) {
    const [isAnimated, setIsAnimated] = useState(false);
    const cardRef = useRef(null);

    // Intersection Observer to detect when the card enters the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsAnimated(true); // Set to true when the card is in view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the card is in view
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            onClick={() => !product.isSoldOut && onClick(product)}
            className={`group relative bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-500 
            ${isAnimated ? `animate__animated animate__fadeInUpBig animate__delay-${index * 300}ms` : ''}`}
        >
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                <img
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ${product.isSoldOut ? 'opacity-50' : ''}`}
                />
                {product.isSoldOut && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                            SOLD OUT
                        </span>
                    </div>
                )}
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-sm text-red-500 mt-1">{product.stock} items left</p>
        </div>
    );
}
