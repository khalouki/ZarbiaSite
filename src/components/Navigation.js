import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.png';
export default function Navigation() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/about-us', label: 'About us' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact-us', label: 'Contact us' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className={`w-full bg-[#BD9975] py-4 md:py-6`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link to="/" className=" text-white flex items-center">
                    <img
                        src={logo}
                        loading="lazy"
                        alt="Beautiful Moroccan tapestry and interior decor"
                        className="object-cover object-center w-[17rem] h-[3rem]"
                    // This size is relative to the font-size of the parent
                    />
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18M3 12h18M3 19h18" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={`text-white font-bold relative pb-1 transition-all duration-300 hover:text-gray-300 ${location.pathname === link.href ? 'border-b-2 border-white' : ''
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4">
                        <Link to="/account" className="text-white hover:text-gray-300 transition-colors duration-300">
                            <span className="sr-only">Account</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </Link>
                        <Link to="/cart" className="text-white hover:text-gray-300 transition-colors duration-300">
                            <span className="sr-only">Cart</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#BD9975] z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-4">
                    <Link to="/" className="text-xl font-bold text-white" onClick={closeMenu}>
                        <img
                            src={logo}
                            loading="lazy"
                            alt="Beautiful Moroccan tapestry and interior decor"
                            className="object-cover object-center w-[17rem] h-[3rem]"
                        // This size is relative to the font-size of the parent
                        />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Close menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-start gap-6 p-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className={`text-white relative pb-1 transition-all duration-300 hover:text-gray-300 ${location.pathname === link.href ? 'border-b-2 border-white' : ''
                                    }`}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-6 p-6">
                    <Link
                        to="/account"
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <span className="sr-only">Account</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </Link>
                    <Link
                        to="/cart"
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                        onClick={closeMenu}
                    >
                        <span className="sr-only">Cart</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>

    );
}
