import Button from "../ui/button";


const AboutUsSection = () => {
    return (
        <section className="relative bg-[#0a0e27] py-20 lg:py-32 overflow-hidden h-[1312px] flex justify-center items-center overflow-hidden" id="about">
            <div className="absolute inset-0">
                <img
                    src="/images/tools/bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 relative">
                {/* Title with Leaf Decorations */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <img
                        src="/images/about/left-leaf.png"
                        alt=""
                        className="w-12 h-12 object-contain"
                    />
                    <h2 className="text-4xl lg:text-5xl font-medium text-white text-center font-fairplay-display">
                        About Blockgram
                    </h2>
                    <img
                        src="/images/about/right-leaf.png"
                        alt=""
                        className="w-12 h-12 object-contain"
                    />
                </div>

                {/* Content Card */}
                <div className="relative bg-[#1a2847]/50 backdrop-blur-sm border border-[#2d3f5f] rounded-3xl p-8 lg:p-[100px] h-[800px]">
                    {/* Text Content */}
                    <div className="space-y-8 text-white">
                        <p className="text-lg lg:text-xl leading-relaxed">
                            We created Blockgram to be the next evolution of Telegram. It keeps the same familiar design but is rebuilt to be smarter, safer, and more powerful. Our goal is simple: give people the tools they need out of the box without relying on bots or risky add ons.
                        </p>

                        <p className="text-lg lg:text-xl leading-relaxed">
                            We built AI powered chat summaries, scam detection, verified badges, and smarter notifications to solve the chaos of group conversations. We added in chat payments and token features so transactions can be as seamless as sending a message. We also designed better moderation and identity tools so communities can grow with confidence.
                        </p>

                        <p className="text-lg lg:text-xl leading-relaxed">
                            Blockgram is not just a new app. It is a step forward for messaging itself. We are focused on creating an experience that feels fast, intuitive, and secure for everyone, from casual users to global communities.
                        </p>

                        {/* Learn More Button */}
                        <div className="pt-4">
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
                    </div>

                    {/* Logo Badge - Bottom Right */}
                    <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12">
                        <img
                            src="/images/about/about-logo.png"
                            alt="Blockgram"
                            className="w-32 h-32 lg:w-48 lg:h-48 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;