"use client"

import { featureCards, redefinesMessagingItems } from "@/constants/features";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
    const col1Items = [...redefinesMessagingItems.slice(0, 3), ...redefinesMessagingItems.slice(0, 3)];
    const col2Items = [...redefinesMessagingItems.slice(3), ...redefinesMessagingItems.slice(3)];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const scroller = scrollRef.current;
        if (!scroller) return;

        const update = () => {
            const maxScroll = scroller.scrollWidth - scroller.clientWidth;
            setCanScrollLeft(scroller.scrollLeft > 0);
            setCanScrollRight(scroller.scrollLeft < Math.max(0, maxScroll - 1));
        };

        update();

        scroller.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);

        return () => {
            scroller.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const scrollByAmount = (direction: "left" | "right") => {
        const scroller = scrollRef.current;
        if (!scroller) return;
        const amount = Math.floor(scroller.clientWidth * 0.45);
        scroller.scrollBy({
            left: direction === "right" ? amount : -amount,
            behavior: "smooth",
        });
    };

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
                    <div className="flex lg:hidden flex-col items-center justify-center gap-4">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display leading-tight text-center mb-12">
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

                    {/* Main Content Area - Image + Cards */}
                    <div className="relative flex flex-col lg:flex-row gap-8 mb-24">
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

                        {/* Right: Cards - Flex Column on Mobile, Scrolling on Desktop */}
                        <div className="flex-1 lg:ml-8 xl:ml-16">
                            {/* Mobile: Simple Flex Column */}
                            <div className="flex flex-col gap-4 lg:hidden">
                                {redefinesMessagingItems.map((item, index) => (
                                    <div key={`mobile-${index}`} className="flex flex-col gap-2 p-4 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                                        <span className="text-3xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-gray-900 leading-relaxed font-inter text-xs">
                                            {item.title}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: Scrolling 2 Columns */}
                            <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6 h-[900px] overflow-hidden mask-gradient relative">
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
                    </div>

                    {/* Header at Bottom */}
                    <div className="lg:flex hidden flex-col items-start justify-center gap-4">
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

                {/* Part 2: Feature Cards with Horizontal Scroll */}
                <div className="relative w-full lg:w-screen">
                    {/* Left Scroll Button */}
                    {canScrollLeft && (
                        <button
                            aria-label="Scroll left"
                            onClick={() => scrollByAmount("left")}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-colors lg:block hidden"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-6 lg:gap-8 overflow-x-scroll hide-scrollbar lg:px-20"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {featureCards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[30px] bg-[#0B0F29] text-white p-2 border border-white/10 hover:border-white/20 transition-all duration-300 flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[536px]"
                            >
                                {/* Card Image area */}
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-transparent to-[#0B0F29]/50">
                                    <Image
                                        src={card.asset}
                                        alt={card.title}
                                        fill
                                        className="object-cover"
                                        unoptimized
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

                    {/* Right Scroll Button */}
                    {canScrollRight && (
                        <button
                            aria-label="Scroll right"
                            onClick={() => scrollByAmount("right")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-sm p-3 hover:bg-white/20 transition-colors lg:block hidden"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturesSection;