import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Wallet",
      description:
        "Securely connect your digital wallet to access your stablecoins across multiple blockchain networks.",
    },
    {
      number: 2,
      title: "Choose Your Assets",
      description:
        "Select from USDC, USDT, DAI, and other major stablecoins with real-time market data and pricing.",
    },
    {
      number: 3,
      title: "Execute Transactions",
      description:
        "Perform instant swaps, transfers, and yield farming with enterprise-grade security and low fees.",
    },
    {
      number: 4,
      title: "Track & Manage",
      description:
        "Monitor your portfolio performance with comprehensive analytics and automated reporting tools.",
    },
  ];

  const stats = [
    { value: '1M+', label: 'Users Onboarded' },
    { value: '99.9%', label: 'Uptime' },
    { value: '0', label: 'Weeks to Launch' },
    { value: '$500M+', label: 'Volume Processed' }
  ];

  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with Hodle in minutes and begin managing your stablecoin portfolio
            with professional-grade tools and security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-orange-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="py-16 px-4 bg-white/50 rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}