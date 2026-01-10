const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#F9FBFF33] backdrop-blur-md border border-white rounded-2xl px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <img src="/images/logo.svg" alt="Blockgram" className="w-16 h-16" />
                            <span className="text-white text-xl font-semibold">Blockgram</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
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

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            <a className="text-gray-300 hover:text-white transition-colors" href="https://blitzgramm.vercel.app/">
                                Login
                            </a>
                            <a className="bg-[#0278E0] hover:bg-[#0267C9] text-white px-6 py-2 rounded-full transition-colors" href="https://blockgram.gitbook.io/blockgram-docs/about-blockgram/core-features/send-and-receive-crypto-in-chat">
                                Whitepaper
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;