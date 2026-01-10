import { featureCards, redefinesMessagingItems } from "@/constants/features";
import Image from "next/image";

const FeaturesSection = () => {
    const col1Items = [...redefinesMessagingItems.slice(0, 3), ...redefinesMessagingItems.slice(0, 3)];
    const col2Items = [...redefinesMessagingItems.slice(3), ...redefinesMessagingItems.slice(3)];

    return (
        <section className="relative w-full overflow-hidden" id="feature">
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
                    {/* Main Content Area - Image + Scrolling Cards */}
                    <div className="relative flex flex-col lg:flex-row gap-8 mb-24 min-h-[600px] lg:min-h-[900px]">
                        {/* Left: Large Phone Image */}
                        <div className="w-full lg:w-auto lg:flex-shrink-0 relative">
                            <div className="relative w-full lg:w-[500px] xl:w-[600px]">
                                <Image
                                    src="/images/features/main-feature.png"
                                    alt="Blockgram Interface"
                                    width={1500}
                                    height={1500}
                                    className="w-full h-auto object-contain rounded-2xl md:rounded-[2rem] shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Right: Scrolling Cards in 2 Columns */}
                        <div className="flex-1 lg:ml-8 xl:ml-16 grid grid-cols-2 gap-4 lg:gap-6 h-[500px] lg:h-[900px] overflow-hidden mask-gradient relative">
                            {/* Column 1: Scroll UP */}
                            <div className="flex flex-col gap-4 lg:gap-6 animate-scroll-up">
                                {col1Items.map((item, index) => (
                                    <div key={`col1-${index}`} className="flex flex-col gap-2 lg:gap-3 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                                        <span className="text-3xl lg:text-4xl xl:text-5xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-gray-900 leading-relaxed font-inter text-xs lg:text-sm xl:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2: Scroll DOWN */}
                            <div className="flex flex-col gap-4 lg:gap-6 animate-scroll-down">
                                {col2Items.map((item, index) => (
                                    <div key={`col2-${index}`} className="flex flex-col gap-2 lg:gap-3 p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                                        <span className="text-3xl lg:text-4xl xl:text-5xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-gray-900 leading-relaxed font-inter text-xs lg:text-sm xl:text-base">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Header at Bottom */}
                    <div className="flex flex-col items-start justify-center gap-4">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display leading-tight text-center">
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