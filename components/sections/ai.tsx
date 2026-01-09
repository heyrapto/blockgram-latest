const AISection = () => {
    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden h-[1070px] flex justify-center items-center">
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
                    {/* LEFT — Chart */}
                    <div className="bg-[#0f1941] rounded-3xl p-12 lg:p-16">

                        {/* Bars */}
                        <div className="flex items-end gap-12 mt-12">
                            {/* YES */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative w-full mb-4">
                                    <div className="w-full h-[320px] bg-white rounded-2xl" />
                                    <span className="absolute -top-14 left-1/2 -translate-x-1/2 text-white text-5xl font-bold">
                                        72%
                                    </span>
                                </div>
                                <span className="text-white text-xl font-medium text-center w-full">
                                    Yes
                                </span>
                            </div>

                            {/* NO */}
                            <div className="flex flex-col items-center flex-1">
                                <div className="relative w-full mb-4">
                                    <div className="w-full h-[140px] bg-white rounded-2xl" />
                                    <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-white text-4xl font-bold">
                                        28%
                                    </span>
                                </div>
                                <span className="text-white text-xl font-medium text-center w-full">
                                    No
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — Text + Image */}
                    <div className="relative">
                        <h2 className="text-4xl lg:text-7xl font-medium text-gray-900 mb-12 leading-tight font-fairplay-display ">
                            Do you need<br />
                            AI assistance<br />
                            in Telegram
                        </h2>

                        {/* Image */}
                        <div className="relative">
                            <img
                                src="/images/ai/man.png"
                                alt="Thinker Statue"
                                className="w-full max-w-md ml-auto grayscale"
                            />

                            {/* AI Logo */}
                            <div className="absolute top-1/4 left-0 lg:left-1/4">
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
            </div>
        </section>
    );
};

export default AISection;