const SuggestionsSection = () => {
    return (
        <section className="relative bg-[#0a0e27] py-20 lg:py-32 overflow-hidden h-[816px]">
            <div className="absolute inset-0">
                <img
                    src="/images/tools/bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Title */}
                <h2 className="text-3xl lg:text-5xl font-medium text-white text-center mb-16 leading-tight max-w-5xl mx-auto font-fairplay-display">
                    What's the one thing you'd most like to improve in your Telegram experience?
                </h2>

                {/* Stats Image */}
                <div className="flex justify-center">
                    <img
                        src="/images/stats.png"
                        alt="User preferences statistics"
                        className="w-full max-w-5xl object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default SuggestionsSection;