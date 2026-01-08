"use client";

import { useState } from 'react';

const StruggleSection = () => {
    const [activeView, setActiveView] = useState('table');

    const struggles = [
        { issue: "Outdated & tedious payments", yes: 34, no: 48 },
        { issue: "Missing alpha in noisy groups?", yes: 60, no: 52 },
        { issue: "Limited account logins", yes: 46, no: 44 },
        { issue: "Buying tokens is tedious", yes: 41, no: 41 },
        { issue: "Too many irrelevant messages", yes: 35, no: 47 },
        { issue: "No seamless video calls", yes: 38, no: 36 },
        { issue: "Scammers everywhere", yes: 30, no: 25 },
        { issue: "All notifications treated the same", yes: 33, no: 26 },
        { issue: "Unsafe file sharing", yes: 32, no: 29 },
        { issue: "No reminders or scheduling", yes: 12, no: 28 }
    ];

    return (
        <section className="relative py-20 bg-[#e8f4f8] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/findings/bg.png"
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12 leading-tight">
                    Did you struggle with any of<br />
                    the following in the last 12 months?
                </h2>

                {/* Content Card */}
                <div className="bg-[#0f1941] rounded-3xl p-8 lg:p-12">
                    {/* Toggle Buttons */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-[#1a2847] rounded-full p-1 inline-flex">
                            <button
                                onClick={() => setActiveView('chart')}
                                className={`px-8 py-2 rounded-full transition-colors ${activeView === 'chart'
                                    ? 'bg-transparent text-white'
                                    : 'bg-transparent text-gray-400 hover:text-white'
                                    }`}
                            >
                                Chart
                            </button>
                            <button
                                onClick={() => setActiveView('table')}
                                className={`px-8 py-2 rounded-full transition-colors ${activeView === 'table'
                                    ? 'bg-white text-gray-900'
                                    : 'bg-transparent text-gray-400 hover:text-white'
                                    }`}
                            >
                                Table
                            </button>
                        </div>
                    </div>

                    {/* Table View */}
                    {activeView === 'table' && (
                        <div className="bg-[#1a2847]/80 rounded-2xl overflow-hidden">
                            {/* Table Header */}
                            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 p-6 border-b border-[#2d3f5f]">
                                <div></div>
                                <div className="text-white font-semibold text-center">Yes</div>
                                <div className="text-white font-semibold text-center">No</div>
                            </div>

                            {/* Table Rows */}
                            {struggles.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-[2fr_1fr_1fr] gap-4 p-6 ${index !== struggles.length - 1 ? 'border-b border-[#2d3f5f]/50' : ''
                                        } hover:bg-[#1a2847]/30 transition-colors`}
                                >
                                    <div className="text-white text-sm lg:text-base">
                                        {item.issue}
                                    </div>
                                    <div className="text-white font-semibold text-center">
                                        {item.yes}%
                                    </div>
                                    <div className="text-white font-semibold text-center">
                                        {item.no}%
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Chart View - Placeholder */}
                    {activeView === 'chart' && (
                        <div className="bg-[#1a2847]/80 rounded-2xl p-12 flex items-center justify-center min-h-[500px]">
                            <p className="text-gray-400 text-lg">Chart view would display visual data representation</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StruggleSection;