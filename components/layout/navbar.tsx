"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#F9FBFF33] backdrop-blur-md border border-white rounded-2xl px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/images/logo.svg" alt="Blockgram" className="w-12 h-12 md:w-16 md:h-16" />
                            <span className="text-white text-lg md:text-xl font-semibold">Blockgram</span>
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            <a href="#home" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                About
                            </a>
                            <a href="#feature" className="text-gray-300 hover:text-white transition-colors">
                                Feature
                            </a>
                            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                                How it Works
                            </a>
                            <a href="#footer" className="text-gray-300 hover:text-white transition-colors">
                                Contact
                            </a>
                        </div>

                        {/* Desktop Right Side Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a className="text-gray-300 hover:text-white transition-colors" href="https://blitzgramm.vercel.app/">
                                Login
                            </a>
                            <a className="bg-[#0278E0] hover:bg-[#0267C9] text-white px-6 py-2 rounded-full transition-colors" href="https://blockgram.gitbook.io/blockgram-docs/about-blockgram/core-features/send-and-receive-crypto-in-chat">
                                Whitepaper
                            </a>
                        </div>

                        {/* Mobile Hamburger Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                            <div className="flex flex-col gap-4">
                                <a
                                    href="#home"
                                    className="text-blue-400 hover:text-blue-300 transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </a>
                                <a
                                    href="#feature"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Feature
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    How it Works
                                </a>
                                <a
                                    href="#footer"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </a>
                                <div className="flex flex-col gap-3 pt-2 border-t border-white/20">
                                    <a
                                        className="text-gray-300 hover:text-white transition-colors py-2"
                                        href="https://blitzgramm.vercel.app/"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Login
                                    </a>
                                    <a
                                        className="bg-[#0278E0] hover:bg-[#0267C9] text-white px-6 py-3 rounded-full transition-colors text-center"
                                        href="https://blockgram.gitbook.io/blockgram-docs/about-blockgram/core-features/send-and-receive-crypto-in-chat"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Whitepaper
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;