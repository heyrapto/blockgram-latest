const SuggestionsSection = () => {
    return (
        <section className="relative bg-[#0a0e27] py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl lg:text-5xl font-bold text-white text-center mb-16 leading-tight max-w-5xl mx-auto">
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