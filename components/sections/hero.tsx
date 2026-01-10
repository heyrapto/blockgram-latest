import Button from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="relative lg:h-fit h-screen bg-[#0a0e27] overflow-hidden" id="home">
            {/* Background Images */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero/bg-blend.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20 overflow-visible">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-6 lg:space-y-8 lg:pt-0 pt-30">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight font-fairplay-display">
                            The{" "}
                            <span className="text-blue-400 relative inline-block">
                                Telegram
                            </span>{" "}
                            you
                            <br />
                            Know on{" "}
                            <span className="relative inline-block">
                                Steroids
                                <img
                                    src="/images/hero/underline.svg"
                                    alt=""
                                    className="absolute -bottom-4 lg:-bottom-5 left-0 w-full"
                                />
                            </span>
                        </h1>

                        <p className="text-gray-300 text-base sm:text-lg max-w-xl">
                            Familiar design, but with AI, better UX, and built-in features you
                            always wished Telegram had.
                        </p>

                        <Button className="text-base sm:text-lg">
                            Get Started
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

                    {/* RIGHT CONTENT – MOCKUP */}
                    <div className="relative mt-10 lg:mt-0">
                        {/* Arrow (desktop only) */}
                        <img
                            src="/images/hero/arrow.svg"
                            alt=""
                            className="absolute left-28 top-52 w-20 hidden lg:block z-20"
                        />

                        {/* Mockup Wrapper */}
                        <div className="relative overflow-visible flex justify-center lg:block"><img
                            src="/images/hero/main.png"
                            alt="Blockgram Interface"
                            className="
        relative z-10
        w-full
        max-w-[320px]
        sm:max-w-[0px]
        md:max-w-[500px]
        pt-12
        translate-y-6
        sm:translate-y-8
        md:translate-y-0

        lg:w-[150%]
        lg:max-w-none
        lg:translate-x-10
        lg:translate-y-0
    "
                        />

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 lg:h-32 bg-linear-to-t from-[#0a0e27] to-transparent" />
        </section>
    );
};

export default HeroSection;