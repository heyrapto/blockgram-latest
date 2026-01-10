const ToolsSection = () => {
    return (
        <section className="relative bg-[#0a0e27] py-20 lg:py-32 overflow-hidden md:h-[1062px] h-fit">
            <div className="absolute inset-0">
                <img
                    src="/images/tools/bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative ">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-12">
                        {/* Title */}
                        <h2 className="text-5xl lg:text-7xl font-medium font-fairplay-display  leading-tight">
                            Smarter tools take<br />centre stage
                        </h2>

                        {/* Statistics */}
                        <div className="relative space-y-6">
                            {/* Curved Arrow */}
                            <img
                                src="/images/tools/down-arrow.svg"
                                alt=""
                                className="absolute -left-24 top-0 w-24 h-24"
                            />

                            <div className="flex items-baseline gap-4">
                                <span className="text-7xl lg:text-8xl font-bold font-fairplay-display ">14%</span>
                                <span className="text-3xl text-gray-300">in 2023</span>
                            </div>

                            <div className="flex items-baseline gap-4">
                                <span className="text-7xl lg:text-8xl font-bold font-fairplay-display ">21%</span>
                                <span className="text-3xl text-gray-300">in 2024</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl">
                            With Blockgram, AI features are not an add on but a core part of the experience. From instant chat summaries to scam detection and profile verification, users get the clarity and safety they have been asking for. The shift is clear, people now expect their messagingapp to be intelligent, secure, and designed around real conversations.
                        </p>
                    </div>

                    {/* Right Content - Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* AI Summary - Higher z-index */}
                            <img
                                src="/images/tools/summary.png"
                                alt="AI"
                                className="w-[400px] h-[200px] relative z-50"
                            />

                            {/* Curved Arrow */}
                            <img
                                src="/images/tools/curved-up-arrow.svg"
                                alt=""
                                className="absolute -left-20 top-1/2 w-24 h-24 z-10"
                            />

                            {/* Keyboard - Lower z-index */}
                            <img
                                src="/images/tools/keyboard.png"
                                alt="Keyboard"
                                className="w-[400px] ml-10 -mt-3 relative z-0"
                            />

                            {/* Bottom Logo Badge */}
                            <div className="absolute -bottom-12 -right-6 z-20">
                                <img
                                    src="/images/tools/bottom-logo.png"
                                    alt="Blockgram"
                                    className="w-32 h-32"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;