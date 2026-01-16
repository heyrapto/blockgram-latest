const FindingsSection = () => {
    const findings = [
        {
            title: "Scam Bots and Fake Accounts",
            description: "Scams are the number one frustration. Fake airdrops, phishing links, and impersonators target users daily. Over 60% of people say they face scam attempts every month.",
            image: "/images/findings/2.gif",
            size: "large"
        },
        {
            title: "Risky Payments",
            description: "Easily build powerful no-code automations with bots, triggers, conditions, and rules all in one place.",
            image: "/images/findings/1.gif",
            size: "large"
        },
        {
            title: "Forgotten Chats",
            description: "Instantly generate replies, recap conversations for other agents, and create new help articles.",
            image: "/images/findings/3.gif",
            size: "small"
        },
        {
            title: "Notification Overload",
            description: "Immediately recommend helpful content with machine learning directly in your product.",
            image: "/images/findings/4.gif",
            size: "small"
        },
        {
            title: "Too Many Accounts",
            description: "Better understand your customers with AI-powered analysis of support conversations.",
            image: "/images/findings/5.png",
            size: "small"
        }
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

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-5xl lg:text-6xl font-medium text-center mb-16 text-gray-900 font-fairplay-display">
                    Key Findings
                </h2>

                {/* Findings Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* First Row - Two Large Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-0">
                        {findings.slice(0, 2).map((finding, index) => (
                            <div
                                key={index}
                                className="relative bg-[#0f1941] rounded-3xl text-white flex flex-col justify-between md:min-h-[400px] min-h-[500px] hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
                            >
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">{finding.title}</h3>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {finding.description}
                                    </p>
                                </div>

                                <img
                                    src={finding.image}
                                    alt={finding.title}
                                    className="absolute bottom-0 right-0 w-[250px] h-[250px] object-cover overflow-hidden"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Second Row - Three Small Cards */}
                    {findings.slice(2, 5).map((finding, index) => (
                        <div
                            key={index + 2}
                            className="bg-[#0f1941] rounded-3xl text-white flex flex-col justify-between min-h-[500px] hover:transform hover:scale-[1.02] transition-transform duration-300 overflow-hidden relative"
                        >

                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4">{finding.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {finding.description}
                                </p>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <img
                                    src={finding.image}
                                    alt={finding.title}
                                    className="absolute bottom-[-30px] right-[-50px] w-[300px] h-[300px] object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FindingsSection;