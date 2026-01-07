import Button from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-[#0a0e27] overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero/bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src="/images/hero/bg-blend.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20 overflow-visible">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
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
                                    className="absolute -bottom-5 left-0 w-full"
                                />
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg max-w-xl">
                            Familiar design, but with AI, better UX, and built-in features you
                            always wished Telegram had.
                        </p>

                        <Button className="text-lg">
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
                    <div className="relative">
                        {/* Arrow */}
                        <img
                            src="/images/hero/arrow.svg"
                            alt=""
                            className="absolute left-52 top-52 w-20 hidden lg:block z-20"
                        />

                        {/* Mockup Wrapper */}
                        <div className="relative overflow-visible">
                            {/* Glow / Depth */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110" />

                            {/* Main Mockup */}
                            <img
                                src="/images/hero/macbook-mock.png"
                                alt="Blockgram Interface"
                                className="relative z-10 w-[140%] max-w-none lg:w-[160%] translate-x-10"
                            />

                            {/* Transaction Modal */}
                            <img
                                src="/images/hero/transaction-mock.png"
                                alt="Transaction Success"
                                className="absolute bottom-[4%] right-[-24%] w-72 lg:w-[500px] z-20"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0a0e27] to-transparent" />
        </section>
    );
};

export default HeroSection;