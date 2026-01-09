const IntroductionSection = () => {
    return (
        <section className="relative bg-[#0a0e27] overflow-hidden h-[600px]">
            <div className="max-w-7xl mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Left Content */}
                    <div className="text-white space-y-6 z-10 relative">
                        <h2 className="text-2xl font-bold mb-8 font-fairplay-display">
                            Introduction
                        </h2>

                        <p className="text-lg lg:text-xl leading-relaxed text-gray-200">
                            Telegram changed the way we connect, but it never evolved for the crypto world. Scam bots, impersonators, noisy notifications, and outdated payment flows make conversations messy and risky. Blockgram brings intelligence to the same familiar interface with in-chat crypto transfers, AI summarization, and realtime translation at its core. On top of that, scam protection, verified badges, and smart notifications keep your chats secure, clear, and fast.
                        </p>
                    </div>

                    {/* Right Image - Absolute positioning to touch bottom */}
                    <div className="relative h-full">
                        <img
                            src="/images/intro-img.png"
                            alt="Blockgram Coin on Pillar"
                            className="absolute bottom-0 right-0 w-full max-w-lg h-auto object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;