import Image from 'next/image';

const BuiltForSection = () => {
    const features = [
        {
            feature: "Scam Protection",
            blockgram: "AI spam detection + file scanner",
            telegram: "Scam bots, phishing links, no AI filters"
        },
        {
            feature: "Crypto Transactions",
            blockgram: "Username = wallet, in-chat transfers",
            telegram: "No native wallet, relies on risky bots"
        },
        {
            feature: "Notifications",
            blockgram: "Smart credit system, priority alerts",
            telegram: "All pings are equal, chaotic alerts"
        },
        {
            feature: "Identity Verification",
            blockgram: "Verified badges + impersonator check",
            telegram: "Easy impersonation of KOLs & devs"
        },
        {
            feature: "Group Management",
            blockgram: "Auto folders, whale groups, token badges",
            telegram: "Overloaded chats, manual sorting"
        },
        {
            feature: "Productivity Tools",
            blockgram: "Built-in reminders + \"Meet\" scheduling",
            telegram: "No reminders or scheduling"
        },
        {
            feature: "Calling",
            blockgram: "Video calls + calendar-style scheduling",
            telegram: "Basic, unreliable calls"
        },
        {
            feature: "Account Limits",
            blockgram: "Unlimited accounts, seamless switching",
            telegram: "Restricted multiple account handling"
        }
    ];

    return (
        <section className="relative bg-[#335CFF] py-12 lg:py-32 overflow-hidden">
            {/* Background Blend Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/bg-blend.png"
                    alt=""
                    className="w-full h-full object-cover mix-blend-multiply"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-3xl lg:text-6xl font-medium text-center text-white mb-8 lg:mb-16 font-fairplay-display pt-4 lg:pt-0">
                    Why Blockgram is Built for the Future?
                </h2>

                {/* Table Container - Scrollable on Mobile */}
                <div className="overflow-x-auto lg:overflow-visible">
                    <div className="bg-[#FFF]/5 backdrop-blur-sm rounded-3xl border border-[#FFF] overflow-hidden min-w-[800px] lg:min-w-0 lg:h-[800px]">
                        {/* Table Header */}
                        <div className="grid grid-cols-[2fr_3fr_3fr] gap-4 p-6 border-b border-[#FFFFFF05] bg-[#FFFFFF14] h-[82px]">
                            <div className="text-gray-300 font-semibold lg:text-lg text-sm">
                                Feature / Need
                            </div>
                            <div className="text-white font-semibold lg:text-lg text-sm text-center">
                                Blockgram
                            </div>
                            <div className="text-gray-300 font-semibold lg:text-lg text-sm text-center">
                                Telegram
                            </div>
                        </div>

                        {/* Table Rows */}
                        {features.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`lg:h-[100px] h-[60px] grid grid-cols-[2fr_3fr_3fr] gap-4 lg:p-6 p-3 ${isEven ? 'bg-[#FFFFFF05]' : 'bg-transparent'} hover:bg-[#FFFFFF08] transition-colors`}
                                >
                                    {/* Feature Name */}
                                    <div className="text-gray-200 font-medium lg:text-lg text-sm flex items-center">
                                        {item.feature}
                                    </div>

                                    {/* Blockgram */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/icons/check.png"
                                            alt="Checkmark"
                                            width={24}
                                            height={24}
                                            className="shrink-0"
                                        />
                                        <span className="text-gray-300 lg:text-lg text-sm">{item.blockgram}</span>
                                    </div>

                                    {/* Telegram */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src="/icons/x.png"
                                            alt="Close"
                                            width={24}
                                            height={24}
                                            className="shrink-0"
                                        />
                                        <span className="text-gray-400 lg:text-lg text-sm">{item.telegram}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuiltForSection;