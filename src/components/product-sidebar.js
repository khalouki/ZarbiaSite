import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function ProductSidebar({ product, isOpen, onClose }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const sidebarClasses = `
        fixed transition-all duration-300 ease-in-out bg-white shadow-lg z-50
        ${isMobile
            ? `bottom-0 left-0 right-0 h-3/4 ${isOpen ? "translate-y-0" : "translate-y-full"} rounded-t-xl`
            : `top-0 right-0 h-full w-96 ${isOpen ? "translate-x-0" : "translate-x-full"}`
        }
    `;

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                    onClick={onClose}
                />
            )}
            <div className={sidebarClasses}>
                <div className="p-6 h-full overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        aria-label="Close sidebar"
                    >
                        <X className="h-6 w-6" />
                    </button>
                    <div className="mb-6 p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-red-500 mb-4">{product.stock} items left</p>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <Button className="w-full" size="lg">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>
    );
}
