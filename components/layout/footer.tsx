import Button from '@/components/ui/button';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="relative bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 inline-flex items-center gap-4">
                            Let's stay in touch
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-[#0278E0] transition-colors"
                            >
                                <FaXTwitter className="w-12 h-12" />
                            </a>
                        </h2>

                        <div className="flex items-center gap-6">
                            <Button className="text-lg">
                                Join the Community
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Logo */}
                    <div className="flex justify-center items-center lg:justify-end">
                        <img
                            src="/images/logo.svg"
                            alt="Blockgram"
                            className="h-16 lg:h-20 object-contain"
                        />
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 ml-4">Blockgram</h1>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 text-sm text-center lg:text-right">
                        © 2025 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;