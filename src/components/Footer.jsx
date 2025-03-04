import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import FaqSection from "./FAQsection";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-48">
            <FaqSection />
            <div className="max-w-6xl mt-[18vw] mx-auto px-6 text-xl">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-48">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-2xl font-bold border-b border-gray-600">ANY-2️⃣-ANY</h2>
                        <p className="mt-2 text-gray-400">Convert, edit, and manage your PDFs effortlessly.
                        <p className="mt-2 text-gray-400">100% Free</p>
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-semibold border-b border-gray-600">Quick Links</h3>
                        <ul className="mt-2 space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                            <li><Link to="/alltools" className="hover:text-white transition">Tools</Link></li>
                            <li><Link to="/" className="hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-lg font-semibold border-b border-gray-600">Follow Us</h3>
                        <div className="mt-2 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition"><FaGithub size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 px-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm flex justify-between">
                    <span> Made with <span className="heart">❤️</span> for the people of the internet.</span>
                    <span>© {new Date().getFullYear()} ANY-2️⃣-ANY. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
