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
                        <h2 className="text-5xl lg:text-[50px] font-medium leading-tight font-bricolage-grotesque bg-gradient-to-b from-white to-[#999999] bg-clip-text text-transparent">
                            AI In Blockgram:<br />
                            Promise or Pitfall?
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
                        className="w-full lg:max-w-4xl max-w-[600px] mx-auto"
                    />

                    {/* Decorative Stars around the statue */}
                    <img
                        src="/images/promise/star.svg"
                        alt=""
                        className="absolute top-[300px] left-[20px] lg:w-12 lg:h-12 w-6 h-6"
                    />
                    <img
                        src="/images/promise/star.svg"
                        alt=""
                        className="absolute bottom-40 right-20 lg:w-12 lg:h-12 w-6 h-6"
                        style={{ animationDelay: '0.5s' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;