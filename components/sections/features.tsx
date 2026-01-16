"use client";

import { featureCards, redefinesMessagingItems } from "@/constants/features";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FeaturesSection = () => {
    const col1Items = [
        ...redefinesMessagingItems.slice(0, 3),
        ...redefinesMessagingItems.slice(0, 3),
    ];
    const col2Items = [
        ...redefinesMessagingItems.slice(3),
        ...redefinesMessagingItems.slice(3),
    ];

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

            <div className="container mx-auto px-4 pt-20 lg:pt-32">
                {/* Part 1: Redefines Messaging */}
                <div className="mb-20 lg:mb-32">
                    <div className="flex lg:hidden flex-col items-center justify-center gap-4">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display leading-tight text-center mb-12">
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
                            <div>Redefines Messaging</div>
                        </h2>
                    </div>

                    <div className="relative flex flex-col lg:flex-row gap-8 mb-24">
                        <div className="flex flex-col gap-[150px]">
                            <div className="relative w-full lg:w-[500px] xl:w-[600px]">
                                <Image
                                    src="/images/features/main-feature.png"
                                    alt="Blockgram Interface"
                                    width={1500}
                                    height={1500}
                                    className="w-full h-auto object-contain rounded-2xl md:rounded-[2rem] shadow-2xl"
                                />
                            </div>

                            <div className="lg:flex hidden flex-col items-start justify-center gap-4">
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-fairplay-display leading-tight">
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
                                    <div>Redefines Messaging</div>
                                </h2>
                            </div>
                        </div>

                        <div className="flex-1 lg:ml-8 xl:ml-16">
                            <div className="flex flex-col gap-4 lg:hidden">
                                {redefinesMessagingItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg"
                                    >
                                        <span className="text-3xl font-medium font-inter">
                                            {item.number}
                                        </span>
                                        <p className="text-xs font-inter">{item.title}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="hidden lg:grid grid-cols-2 gap-6 h-[900px] overflow-hidden mask-gradient">
                                <div className="flex flex-col gap-6 animate-scroll-up">
                                    {col1Items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg"
                                        >
                                            <span className="text-4xl font-medium font-inter">
                                                {item.number}
                                            </span>
                                            <p className="text-sm font-inter">{item.title}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-6 animate-scroll-down">
                                    {col2Items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-6 rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg"
                                        >
                                            <span className="text-4xl font-medium font-inter">
                                                {item.number}
                                            </span>
                                            <p className="text-sm font-inter">{item.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2: Horizontal Feature Cards */}
            <div className="w-full pb-20 lg:pb-32 overflow-hidden relative group">
                {canScrollLeft && (
                    <button
                        onClick={() => scrollByAmount("left")}
                        className="hidden md:block absolute left-4 lg:left-8 top-[calc(50%-20px)] lg:top-[calc(50%-32px)] z-20 rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors backdrop-blur-sm"
                        aria-label="Scroll left"
                    >
                        ◀
                    </button>
                )}

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="
            w-full
            md:overflow-x-auto
            hide-scrollbar
            px-4
            lg:px-8
            pb-8
            md:snap-x
            md:snap-mandatory
          "
                >
                    {/* Content Wrapper - Centers content if it fits, scrolls if it doesn't */}
                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-max mx-auto md:min-w-full lg:min-w-0 justify-start lg:justify-center">
                        {featureCards.map((card, index) => (
                            <div
                                key={index}
                                className="
                  md:snap-center
                  flex-shrink-0
                  w-full
                  md:w-[400px]
                  lg:w-[536px]
                  h-[644px]
                "
                            >
                                <div className="h-full rounded-[30px] bg-[#0B0F29] p-2 border border-white/10 text-white">
                                    <div className="relative h-[250px] md:h-[300px] lg:h-[432px] rounded-2xl overflow-hidden mb-6">
                                        <Image
                                            src={card.asset}
                                            alt={card.title}
                                            fill
                                            className="object-cover h-[432px] w-full"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="px-6 pb-8">
                                        <h3 className="text-xl md:text-[25px] font-inter font-medium mb-3">{card.title}</h3>
                                        <p className="text-gray-400 text-sm md:text-[20px] leading-relaxed font-inter">{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scrollByAmount("right")}
                        className="hidden md:block absolute right-4 lg:right-8 top-[calc(50%-20px)] lg:top-[calc(50%-32px)] z-20 rounded-full bg-white/10 p-3 hover:bg-white/20 transition-colors backdrop-blur-sm"
                        aria-label="Scroll right"
                    >
                        ▶
                    </button>
                )}
            </div>
        </section>
    );
};

export default FeaturesSection;
