const AISection = () => {
    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden min-h-[800px] lg:min-h-[1070px] flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src="/images/findings/bg.png" alt="" className="w-full h-full object-cover opacity-50" />
            </div>

            {/* Stats Card - Hidden on mobile, visible on large screens - LEFT */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[45%] xl:w-[50%] max-w-[800px] mx-auto z-10">
                <img
                    src="/images/ai/left-stat.png"
                    alt="Statistics"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Statue Image - Hidden on mobile, visible on large screens - RIGHT */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[55%] xl:w-[50%] h-full max-w-[800px]">
                <img
                    src="/images/ai/man.png"
                    alt="Thinker Statue"
                    className="absolute right-0 bottom-0 h-[85%] w-auto object-cover grayscale"
                />

                {/* AI Logo positioned over statue */}
                <div className="absolute top-[45%] left-[15%] xl:left-[15%]">
                    <img
                        src="/images/ai/highlight.svg"
                        alt=""
                        className="absolute -top-6 -left-6 w-12 h-12 xl:w-16 xl:h-16"
                    />
                    <img
                        src="/images/ai/logo.png"
                        alt="Blockgram AI"
                        className="w-32 h-32 xl:w-40 xl:h-40"
                    />
                </div>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 w-full">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - At top on mobile, repositioned on desktop */}
                    <div className="w-full lg:col-span-2 flex justify-center lg:justify-end items-center lg:absolute lg:right-[300px] lg:top-[-500px] z-20">
                        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-medium text-gray-900 leading-tight font-fairplay-display max-w-2xl text-center lg:text-left">
                            Do you need<br />
                            AI assistance<br />
                            in Telegram
                        </h2>
                    </div>

                    {/* Mobile Images - Only visible on mobile/tablet */}
                    <div className="lg:hidden w-full mt-8 space-y-8">
                        {/* Stats Card on Mobile */}
                        <div className="w-full max-w-md mx-auto">
                            <img
                                src="/images/ai/left-stat.png"
                                alt="Statistics"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Statue and Logo on Mobile */}
                        <div className="relative w-full max-w-md mx-auto h-[400px]">
                            <img
                                src="/images/ai/man.png"
                                alt="Thinker Statue"
                                className="absolute right-0 bottom-0 h-full w-auto object-cover grayscale"
                            />
                            <div className="absolute top-[20%] left-[10%]">
                                <img
                                    src="/images/ai/highlight.svg"
                                    alt=""
                                    className="absolute -top-4 -left-4 w-10 h-10"
                                />
                                <img
                                    src="/images/ai/logo.png"
                                    alt="Blockgram AI"
                                    className="w-24 h-24"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;