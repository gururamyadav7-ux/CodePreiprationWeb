
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Standard",
        price: "$59",
        description: "Perfect for getting started.",
        features: [
            "One end products",
            "12 months updates",
            "6 months of support",
            "JavaScript version",
        ],
        features2: [
            "TypeScript version",
            "Design resources",
            "Commercial applications"
        ],
        button: "Get Started",
    },
    {
        name: "POPULAR",
        price: "$99",
        description: "Plus",
        popular: true,
        features: [
            "One end products",
            "12 months updates",
            "6 months of support",
            "JavaScript version",
            "TypeScript version",
            "Design resources",
        ],
        features2: [
            "Commercial applications"
        ],
        button: "Start Premium",
    },
    {
        name: "Extended",
        price: "$249",
        description: "Powerful tools for your teamwork.",
        features: [
            "One end products",
            "12 months updates",
            "6 months of support",
            "JavaScript version",
            "TypeScript version",
            "Design resources",
            "Commercial applications"
        ],
        button: "Choose Enterprise",
    },
];

const PricingCard = () => {
    return (
        <section className="min-h-screen w-full bg-[#050816] px-5 py-20 text-white">
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm text-purple-300">
                        <Sparkles size={16} />
                        Premium Plans
                    </div>

                    <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                        Choose Your{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Perfect Plan
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-gray-400">
                        Powerful features, flexible pricing and everything you need to
                        build something amazing.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-7 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`group relative rounded-3xl p-[1px] transition duration-500 hover:-translate-y-3 ${plan.popular
                                ? "bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(59,130,246,0.25)]"
                                : "bg-white/10 hover:bg-gradient-to-b hover:from-white/20 hover:to-purple-500/30"
                                }`}
                        >

                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="h-full rounded-[23px] bg-[#0b1020]/95 p-7 backdrop-blur-xl">

                                {/* Plan Name */}
                                <h2 className="text-2xl font-bold">
                                    {plan.name}
                                </h2>

                                <p className="mt-2 min-h-[48px] text-sm text-gray-400">
                                    {plan.description}
                                </p>

                                {/* Price */}
                                <div className="mt-7 flex items-end gap-2">
                                    <span className="text-5xl font-black">
                                        {plan.price}
                                    </span>
                                </div>

                                {/* Button */}
                                <button
                                    className={`mt-8 w-full rounded-xl py-3.5 font-semibold transition duration-300 ${plan.popular
                                        ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02]"
                                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    {plan.button}
                                </button>

                                {/* Divider */}
                                <div className="my-8 h-px bg-white/10" />

                                {/* Features */}
                                <p className="mb-5 text-sm font-semibold text-gray-300">
                                    What's included:
                                </p>

                                <div className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-gray-400"
                                        >
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                                                <Check size={13} />
                                            </span>

                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PricingCard;
