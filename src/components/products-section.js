import { useState } from 'react';
import zarbia1 from '../images/zarbia1.jpg';
import zarbia2 from '../images/zarbia2.webp';
import zarbia3 from '../images/zarbia3.jpeg';
import zarbia4 from '../images/zarbia4.jpg';
import zarbia5 from '../images/zarbia5.webp';
import ProductCard from './product-card'
import poof from '../images/poof.webp';
import ProductSidebar from './product-sidebar';

export default function ProductsSection() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const products = [
        {
            id: 0,
            name: 'Zarbi Marocain 1',
            price: 50.00,
            image: zarbia1,
            country: 5,
            description: 'A fusion of Moroccan craftsmanship and modern design, this vibrant rug adds a touch of exotic elegance to any space.',
            isSoldOut: false
        },
        {
            id: 1,
            name: 'Zarbi Marocain 2',
            price: 78.00,
            image: zarbia2,
            country: 10,
            description: 'Ergonomically designed for long-lasting comfort, the Kruzo Aero Chair combines sleek aesthetics with optimal support.',
            isSoldOut: false
        },
        {
            id: 2,
            name: 'Zarbi Marocain 3',
            price: 43.00,
            image: zarbia3,
            country: "0",
            description: 'This ergonomic chair is designed to promote better posture and provide comfort for hours of seating, making it ideal for work or study.',
            isSoldOut: true
        },
        {
            id: 3,
            name: 'Zarbi Marocain 4',
            price: 65.00,
            image: zarbia4,
            country: 1,
            description: 'Elevate any room with this stylish accent rug, crafted with attention to detail for both comfort and visual appeal.',
            isSoldOut: false
        },
        {
            id: 4,
            name: 'Zarbi Marocain 5',
            price: 120.00,
            image: zarbia5,
            country: 12,
            description: 'A sturdy wooden desk offering ample space and timeless design, perfect for creating an inspiring workspace.',
            isSoldOut: false
        },
        {
            id: 5,
            name: 'Zarbi Marocain 6',
            price: 85.00,
            image: zarbia1,
            country: 2,
            description: 'Showcase your books, decor, and treasures with this sleek, modern bookshelf, designed to complement any contemporary home.',
            isSoldOut: true
        },
        {
            id: 6,
            name: 'Zarbi Marocain 7',
            price: 250.00,
            image: zarbia2,
            country: 23,
            description: 'Indulge in luxurious comfort with this premium leather sofa, designed for both style and relaxation.',
            isSoldOut: false
        },
        {
            id: 7,
            name: 'Zarbi Marocain 8',
            price: 70.00,
            image: poof,
            country: 14,
            description: 'Add a chic touch to your living room with this stylish and functional coffee table, perfect for any modern space.',
            isSoldOut: false
        },
    ];

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setIsSidebarOpen(true);
    };

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <section className="container mx-auto px-4 py-24">
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
                        index={index} // Pass index for the delay
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
