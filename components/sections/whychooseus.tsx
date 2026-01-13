import Button from "../ui/button";

const WhyChooseUsSection = () => {
    return (
        <section className="relative py-16 bg-[#e8f4f8] overflow-hidden min-h-[800px] lg:min-h-[1200px] flex justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/why/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Right Mockup as Background Element on Large Screens */}
            <div className="hidden lg:block absolute right-0 bottom-8 lg:bottom-12 xl:bottom-16 w-[50%] xl:w-[50%] h-[70%] max-w-[800px]">
                <img
                    src="/images/why/why-img.png"
                    alt="Blockgram Payment Interface"
                    className="absolute right-0 bottom-0 w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 w-full">
                {/* Section Title */}
                <div className="text-center mb-12 lg:mb-[200px]">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 relative inline-block font-fairplay-display">
                        Why Blockgram?
                        <img
                            src="/images/why/underline-black.svg"
                            alt=""
                            className="absolute -bottom-4 lg:-bottom-6 right-0 w-[50%]"
                        />
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6 lg:space-y-8 relative z-10">
                        <div>
                            <h3 className="text-5xl sm:text-5xl lg:text-6xl xl:text-[8.5rem] font-bold text-gray-900 mb-4 lg:mb-6 leading-tight font-fairplay-display">
                                <div className="flex items-baseline gap-2 lg:gap-3">
                                    <span>Solving</span>
                                    <img
                                        src="/images/why/send-arrow.svg"
                                        alt=""
                                        className="w-12 h-12 lg:w-16 lg:h-16 translate-y-1 lg:block hidden"
                                    />
                                </div>

                                <div>
                                    <span>Telegram's</span>
                                </div>

                                <div>Flaws</div>
                            </h3>

                            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-[600px]">
                                Telegram is the heartbeat of crypto, but it's also the weak spot. Blockgram keeps the best parts - speed, familiarity, communities and fixes everything else.
                            </p>
                        </div>

                        <Button className="text-base lg:text-lg">
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

                    {/* Right Mockup - Mobile/Tablet Only */}
                    <div className="flex justify-center lg:hidden">
                        <div className="relative">
                            <img
                                src="/images/why/mobile-why.png"
                                alt="Blockgram Payment Interface"
                                className="w-full max-w-md object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;