const AISection = () => {
    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden min-h-[800px] lg:min-h-[1070px] flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/findings/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Stats Card as Background Element on Large Screens - LEFT */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[45%] xl:w-[40%] max-w-[600px] mx-auto z-10">
                <img
                    src="/images/ai/left-stat.png"
                    alt="Statistics"
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Statue Image as Background Element on Large Screens - RIGHT */}
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
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT — Chart (Mobile/Tablet Only) */}
                    <div className="lg:hidden bg-[#0f1941] rounded-3xl p-8 relative z-10">
                        {/* Bars */}
                        <div className="flex items-end gap-8">
                            {/* YES */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative w-full mb-4">
                                    <div className="w-full h-[240px] bg-white rounded-2xl" />
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
                                        72%
                                    </span>
                                </div>
                                <span className="text-white text-lg font-medium text-center w-full">
                                    Yes
                                </span>
                            </div>

                            {/* NO */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative w-full mb-4">
                                    <div className="w-full h-[110px] bg-white rounded-2xl" />
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-3xl font-bold">
                                        28%
                                    </span>
                                </div>
                                <span className="text-white text-lg font-medium text-center w-full">
                                    No
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CENTER — Text Content */}
                    <div className="lg:col-span-2 flex justify-end items-center absolute right-[300px] top-[-500px] z-20">
                        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-medium text-gray-900  leading-tight font-fairplay-display max-w-2xl">
                            Do you need<br />
                            AI assistance<br />
                            in Telegram
                        </h2>
                    </div>

                    {/* RIGHT — Image (Mobile/Tablet Only) */}
                    <div className="relative lg:hidden">
                        <img
                            src="/images/ai/man.png"
                            alt="Thinker Statue"
                            className="w-full max-w-md ml-auto grayscale"
                        />

                        {/* AI Logo */}
                        <div className="absolute top-1/4 left-0 lg:left-1/10">
                            <img
                                src="/images/ai/highlight.svg"
                                alt=""
                                className="absolute -top-6 -left-6 w-16 h-16"
                            />
                            <img
                                src="/images/ai/logo.png"
                                alt="Blockgram AI"
                                className="w-32 h-32"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISection;