import { featureCards, redefinesMessagingItems } from "@/constants/features";
import Image from "next/image";

const FeaturesSection = () => {
    // Duplicate items for infinite scroll effect
    const extendedItems = [...redefinesMessagingItems, ...redefinesMessagingItems]; // 2x duplication usually enough for CSS loop if formatted right

    // Split into odd/even or first-half/second-half for the columns?
    // The user wants TWO columns moving in OPPOSITE directions.
    // Ideally, column 1 has specific items, column 2 has others, but to fill them up we need separate lists.
    // The user's screenshot showed 02-04 on left, 05-07 on right.
    // So I will make col1 = items 0-2 (repeated), col2 = items 3-5 (repeated).

    const col1Items = [...redefinesMessagingItems.slice(0, 3), ...redefinesMessagingItems.slice(0, 3)];
    const col2Items = [...redefinesMessagingItems.slice(3), ...redefinesMessagingItems.slice(3)];

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
                {/* Part 1: Redefines Messaging - Swapped Order: Content First, Header Last */}

                <div className="mb-32">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                        {/* Left Column: Feature Image (Static) */}
                        <div className="relative z-10">
                            <Image
                                src="/images/features/main-feature.png"
                                alt="Blockgram Interface"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain rounded-2xl md:rounded-[2rem] shadow-2xl"
                            />
                        </div>

                        {/* Right Column: Infinite Scroll Lists */}
                        {/* We need a fixed height container to mask the overflowing content */}
                        <div className="grid grid-cols-2 gap-6 h-[500px] md:h-[900px] overflow-hidden mask-gradient relative">
                            {/* Column 1: Scroll UP */}
                            <div className="flex flex-col gap-6 animate-scroll-up">
                                {col1Items.map((item, index) => (
                                    <div key={`col1-${index}`} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                                        <span className="text-4xl md:text-5xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-gray-900 leading-relaxed font-inter text-sm md:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2: Scroll DOWN */}
                            <div className="flex flex-col gap-6 animate-scroll-down">
                                {col2Items.map((item, index) => (
                                    <div key={`col2-${index}`} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                                        <span className="text-4xl md:text-5xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-gray-900 leading-relaxed font-inter text-sm md:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Header Moved to Bottom of this section */}
                    <div className="flex flex-col items-start justify-center text-center gap-4">
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display leading-tight text-left">
                                {/* First line */}
                                <div className="flex items-center gap-4">
                                    <span>How Blockgram</span>
                                    <Image
                                        src="/images/features/envelope.svg"
                                        alt="Envelope"
                                        width={64}
                                        height={64}
                                        className="inline-block w-12 md:w-16 h-auto"
                                    />
                                </div>

                                {/* Second line */}
                                <div>Redefines Messaging</div>
                            </h2>
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
                                    unoptimized // GIFs
                                />
                            </div>

                            {/* Card Content */}
                            <div className="px-6 pb-8">
                                <h3 className="text-xl md:text-xl font-inter font-medium mb-3">
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