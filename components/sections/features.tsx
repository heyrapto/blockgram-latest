import { featureCards, redefinesMessagingItems } from "@/constants/features";
import Image from "next/image";

const FeaturesSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/features/bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>

            <div className="container mx-auto px-4 py-20 lg:py-32">
                {/* Part 1: Redefines Messaging */}
                <div className="mb-32">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display text-center mb-16 lg:mb-24">
                        How Blockgram <br className="hidden md:block" /> Redefines
                        Messaging
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Feature Image */}
                        <div className="relative">
                            <Image
                                src="/images/features/main-feature.png"
                                alt="Blockgram Interface"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain rounded-2xl md:rounded-[2rem] shadow-2xl"
                            />
                        </div>

                        {/* Right Column: Numbered List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                            {redefinesMessagingItems.map((item, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <span className="text-4xl md:text-5xl font-medium font-inter">
                                        {item.number}
                                    </span>
                                    <p className="text-gray-700 leading-relaxed font-inter">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Part 2: Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featureCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-[#0B0F29] text-white p-2 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Card Image area */}
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-transparent to-[#0B0F29]/50">
                                <Image
                                    src={card.asset}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                    unoptimized // GIFs often need unoptimized to play correctly or just be handled better
                                />
                            </div>

                            {/* Card Content */}
                            <div className="px-6 pb-8">
                                <h3 className="text-xl md:text-2xl font-inter font-medium mb-3">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-inter">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;