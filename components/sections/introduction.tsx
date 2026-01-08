const IntroductionSection = () => {
    return (
        <section className="relative bg-[#0a0e27] py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                            Introduction
                        </h2>

                        <p className="text-lg lg:text-xl leading-relaxed text-gray-200">
                            Telegram changed the way we connect, but it never evolved for the crypto world. Scam bots, impersonators, noisy notifications, and outdated payment flows make conversations messy and risky. Blockgram brings intelligence to the same familiar interface with in-chat crypto transfers, AI summarization, and realtime translation at its core. On top of that, scam protection, verified badges, and smart notifications keep your chats secure, clear, and fast.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src="/images/intro-img.png"
                                alt="Blockgram Coin on Pillar"
                                className="w-full max-w-md lg:max-w-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;