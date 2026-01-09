import Button from "../ui/button";


const WhyChooseUsSection = () => {
    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/why/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 relative inline-block font-fairplay-display">
                        Why Blockgram?
                        <img
                            src="/images/why/underline-black.svg"
                            alt=""
                            className="absolute -bottom-6 right-0 w-[50%"
                        />
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-4xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight font-fairplay-display">
                                <div className="flex items-baseline gap-3">
                                    <span>Solving</span>
                                    <img
                                        src="/images/why/send-arrow.svg"
                                        alt=""
                                        className="w-16 h-16 translate-y-1"
                                    />
                                </div>

                                <div className="">
                                    <span>Telegram's</span>

                                </div>

                                <div>Flaws</div>
                            </h3>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Telegram is the heartbeat of crypto, but it's also the weak spot. Blockgram keeps the best parts - speed, familiarity, communities and fixes everything else.
                            </p>
                        </div>

                        <Button className="text-lg">
                            Learn More
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>

                    {/* Right Mockup */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                src="/images/why/why-img.png"
                                alt="Blockgram Payment Interface"
                                className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;