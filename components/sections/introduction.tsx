const IntroductionSection = () => {
    return (
        <section className="relative bg-[#0a0e27] overflow-hidden md:h-[600px] h-[1200px]">
            {/* Left Content */}
            <div className="max-w-7xl mx-auto px-4 h-full">
                <div className="flex items-center h-full">
                    <div className="text-white space-y-6 z-10 relative lg:w-1/2">
                        <h2 className="text-2xl font-bold mb-8 font-fairplay-display">
                            Introduction
                        </h2>

                        <p className="text-lg lg:text-xl leading-relaxed text-gray-200">
                            Telegram changed the way we connect, but it never evolved for the crypto world. Scam bots, impersonators, noisy notifications, and outdated payment flows make conversations messy and risky. Blockgram brings intelligence to the same familiar interface with in-chat crypto transfers, AI summarization, and realtime translation at its core. On top of that, scam protection, verified badges, and smart notifications keep your chats secure, clear, and fast.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image - Positioned absolutely on the section itself */}
            <div className="absolute bottom-0 right-0 lg:right-[5%] w-[90%] md:w-[50%] lg:w-[45%] h-[50%] md:h-[70%] lg:h-[100%]">
                <img
                    src="/images/intro-img.png"
                    alt="Blockgram Coin on Pillar"
                    className="w-full h-full object-contain object-bottom"
                />
            </div>
        </section>
    );
};

export default IntroductionSection;