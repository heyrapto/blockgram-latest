const HowItWorksSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2] py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/howitworks/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-20">
                    How It Works
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Upgrade Without Restarting:<br />
                            Your Chat, But Smarter
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Blockgram is a seamless layer on top of Telegram, not a restart. All your chats, groups, and contacts sync automatically no migration needed. You keep your conversations, but now with AI summaries, in-chat crypto transfers, scam protection, and verified identity built in. Same Telegram—just smarter.
                        </p>

                        {/* Key Icon */}
                        <div className="pt-8">
                            <img
                                src="/images/howitworks/key.png"
                                alt="Key"
                                className="w-32 h-32 object-contain opacity-80"
                            />
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/images/howitworks/bottom-img.png"
                            alt="Blockgram Interface"
                            className="w-full max-w-2xl object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;