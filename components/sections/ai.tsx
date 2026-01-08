const AISection = () => {
    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/findings/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Chart */}
                    <div className="bg-[#0f1941] rounded-3xl p-12 lg:p-16">
                        <h3 className="text-white text-5xl lg:text-6xl font-bold mb-12">72%</h3>

                        {/* Bar Chart */}
                        <div className="flex items-end gap-8 mb-8">
                            {/* Yes Bar */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="w-full bg-white rounded-2xl mb-4" style={{ height: '320px' }}></div>
                                <span className="text-white text-xl font-medium">Yes</span>
                            </div>

                            {/* No Bar */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="w-full bg-white rounded-2xl mb-4" style={{ height: '140px' }}></div>
                                <span className="text-white text-xl font-medium">No</span>
                            </div>
                        </div>

                        {/* 28% Label */}
                        <div className="text-white text-4xl font-bold text-right pr-8">28%</div>
                    </div>

                    {/* Right Content - Text and Image */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                            Do you need<br />
                            AI assistance<br />
                            in Telegram
                        </h2>

                        {/* Statue Image with Logo Overlay */}
                        <div className="relative">
                            <img
                                src="/images/ai/man.png"
                                alt="Thinker Statue"
                                className="w-full max-w-md ml-auto grayscale"
                            />

                            {/* AI Logo Badge */}
                            <div className="absolute top-1/4 left-0 lg:left-1/4">
                                {/* Highlight Effect */}
                                <img
                                    src="/images/ai/highlight.svg"
                                    alt=""
                                    className="absolute -top-6 -left-6 w-16 h-16"
                                />

                                {/* Logo Circle */}
                                <div className="relative">
                                    <img
                                        src="/images/ai/logo.png"
                                        alt="Blockgram AI"
                                        className="w-32 h-32"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;