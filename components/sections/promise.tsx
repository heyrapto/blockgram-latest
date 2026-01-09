const PromiseSection = () => {
    return (
        <section className="relative bg-[#0a0e27] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="/images/tools/bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <img
                src="/images/promise/star.svg"
                alt=""
                className="absolute left-0 right-0 top-10 bottom-0 mx-auto w-8 h-8"
            />
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start pt-20 lg:pt-32">
                    {/* Left Content */}
                    <div className="space-y-8 text-white">
                        <h2 className="text-5xl lg:text-6xl font-medium leading-tight font-bricolage-grotesque">
                            AI In Blockgram:<br />
                            <span className="text-gray-400">Promise or Pitfall?</span>
                        </h2>

                        <p className="text-2xl max-w-xl font-medium leading-snug font-bricolage-grotesque">
                            People Deserve A Messaging App That Works For Them
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6 text-white">
                        <p className="text-lg leading-relaxed">
                            Thanks to Blockgram, conversations become smarter and safer.
                        </p>

                        <p className="text-lg leading-relaxed">
                            The same familiar Telegram design, rebuilt with AI and crypto-native tools to fix what has been broken for years. Blockgram handles scam bots, noisy notifications, and messy chats with AI-powered protection, smart summaries, and clean organization. It also makes payments seamless by letting you send or receive crypto directly inside the chat, with verified profiles and badges that bring real trust to communities.
                        </p>
                    </div>
                </div>

                {/* Bottom Image - Statue */}
                <div className="relative mt-16 lg:mt-24">
                    <img
                        src="/images/promise/man.png"
                        alt="Balance and Wisdom"
                        className="w-full max-w-4xl mx-auto"
                    />

                    {/* Decorative Stars around the statue */}
                    <img
                        src="/images/promise/star.svg"
                        alt=""
                        className="absolute top-[300px] left-[20px] w-12 h-12"
                    />
                    <img
                        src="/images/promise/star.svg"
                        alt=""
                        className="absolute bottom-40 right-20 w-12 h-12 "
                        style={{ animationDelay: '0.5s' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;