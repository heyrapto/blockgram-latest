import Image from "next/image";

const HowItWorksSection = () => {
    return (
        <section className="relative w-full overflow-hidden pt-20 pb-0" id="how-it-works">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/howitworks/bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>

            <div className="container mx-auto px-4">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-6xl font-fairplay-display text-center mb-16 md:mb-24">
                    How It Works
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-20 relative">
                    {/* Left: Text Content */}
                    <div className="lg:w-1/2 z-10">
                        <h3 className="text-3xl md:text-5xl font-fairplay-display leading-tight mb-8">
                            Upgrade Without Restarting: <br />
                            Your Chat, But Smarter
                        </h3>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl font-inter">
                            Blockgram is a seamless layer on top of Telegram, not a restart.
                            All your chats, groups, and contacts sync automatically no migration needed.
                            You keep your conversations, but now with AI summaries, in-chat crypto transfers,
                            scam protection, and verified identity built in. Same Telegram, just smarter.
                        </p>
                    </div>

                    {/* Right: Key Image (Floating) */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <Image
                            src="/images/howitworks/key.png"
                            alt="Key"
                            width={300}
                            height={300}
                            className="w-48 md:w-64 lg:w-[500px] h-auto object-contain transform rotate-12"
                        />
                    </div>
                </div>

                {/* Bottom Image: Phone Mockup */}
                <div className="relative w-full flex justify-center mt-8">
                    <Image
                        src="/images/howitworks/bottom-img.png"
                        alt="Blockgram Mobile Interface"
                        width={1200}
                        height={800}
                        className="w-full max-w-5xl h-auto object-contain"
                        quality={100}
                    />
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;