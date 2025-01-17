import { useState, useEffect, useRef } from 'react';
import zarbia1 from '../images/zarbia1.jpg';
import zarbia2 from '../images/zarbia2.webp';
import zarbia3 from '../images/zarbia3.jpeg';
import zarbia4 from '../images/zarbia4.jpg';
import zarbia5 from '../images/zarbia5.webp';
import ProductCard from './product-card';
import poof from '../images/poof.webp';
import ProductSidebar from './product-sidebar';

export default function ProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [visibleProducts, setVisibleProducts] = useState([]); // Store visible product indices
    const sectionRef = useRef(null); // Reference to the product section for intersection observer

    const products = [
        { id: 0, name: 'Zarbi Marocain 1', price: 50.00, image: zarbia1, country: 5, description: 'A fusion of Moroccan craftsmanship...', isSoldOut: false },
        { id: 1, name: 'Zarbi Marocain 2', price: 78.00, image: zarbia2, country: 10, description: 'Ergonomically designed for long-lasting comfort...', isSoldOut: false },
        { id: 2, name: 'Zarbi Marocain 3', price: 43.00, image: zarbia3, country: "0", description: 'This ergonomic chair...', isSoldOut: true },
        { id: 3, name: 'Zarbi Marocain 4', price: 65.00, image: zarbia4, country: 1, description: 'Elevate any room with this stylish accent rug...', isSoldOut: false },
        { id: 4, name: 'Zarbi Marocain 5', price: 120.00, image: zarbia5, country: 12, description: 'A sturdy wooden desk...', isSoldOut: false },
        { id: 5, name: 'Zarbi Marocain 6', price: 85.00, image: zarbia1, country: 2, description: 'Showcase your books...', isSoldOut: true },
        { id: 6, name: 'Zarbi Marocain 7', price: 250.00, image: zarbia2, country: 23, description: 'Indulge in luxurious comfort...', isSoldOut: false },
        { id: 7, name: 'Zarbi Marocain 8', price: 70.00, image: poof, country: 14, description: 'Add a chic touch to your living room...', isSoldOut: false },
    ];

    // Intersection Observer to detect when the product section is visible
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Once the section is visible, show all products at once (no delay)
                    setVisibleProducts(products.map((_, index) => index)); // Make all products visible
                }
            });
        }, options);

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); // Runs only once when the component mounts

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <section ref={sectionRef} className="container mx-auto px-4 py-24">
            <div className="max-w-xl mb-16">
                <h2 className="text-4xl font-bold mb-6">Crafted with excellent material.</h2>
                <p className="text-gray-600">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <button className="mt-8 px-8 py-3 bg-black text-white rounded-md hover:bg-black/90 transition-colors">
                    Explore
                </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => handleProductClick(product)}
                        isVisible={visibleProducts.includes(index)} // Make all products visible immediately
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductSidebar
                    product={selectedProduct}
                    isOpen={isSidebarOpen}
                    onClose={handleCloseSidebar}
                />
            )}
        </section>
    );
}
