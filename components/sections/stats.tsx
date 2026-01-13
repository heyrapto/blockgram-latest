const StatsSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2] py-20 lg:py-32 overflow-hidden md:h-[733px] h-fit flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/howitworks/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Large Statistic */}
                    <div className="space-y-8">
                        <h2 className="text-8xl lg:text-[200px] font-medium text-gray-900 leading-none font-fairplay-display">
                            42%
                        </h2>

                        <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed">
                            of Telegram users say they miss important updates because of noisy notifications and endless group chatter.
                        </p>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl lg:text-4xl font-medium text-gray-900 leading-tight font-bricolage-grotesque">
                            Users Double Down on Smarter Messaging in 2025.
                        </h3>

                        <p className="text-2xl text-gray-700 leading-relaxed">
                            People are demanding clarity, context, and security in their chats. The need for AI-powered summaries, trusted identity checks, and safe in-chat payments has surged. Blockgram puts these features front and center, helping users focus on what matters instead of drowning in noise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;