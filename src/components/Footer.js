import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import logo from '../images/logo.png';
import { useLocation, Link } from 'react-router-dom';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your server or newsletter service
    console.log(`Subscribed with email: ${email}`);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
          <Link to="/" className=" text-white flex items-center">
                    <img
                        src={logo}
                        loading="lazy"
                        alt="Beautiful Moroccan tapestry and interior decor"
                        className="object-cover object-center w-[17rem] h-[3rem]"
                    // This size is relative to the font-size of the parent
                    />
                </Link>
            <p className="mb-4">We are dedicated to providing high-quality products and services to our customers.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Hay Elmassira, Oued zem, maroc</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: abdelkhalkessaid1@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-400"
              />
              <Button type="submit" className="w-full">
                Subscribe <i className="fas fa-paper-plane ml-2"></i>
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Khalouk Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
