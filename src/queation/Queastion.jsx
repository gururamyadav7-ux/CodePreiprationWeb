import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqData = [
    {
        question: "What is your premium plan?",
        answer:
            "Our premium plan gives you access to advanced features, unlimited usage and premium support.",
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            "Yes, you can cancel your subscription anytime from your account settings.",
    },
    {
        question: "Do you provide customer support?",
        answer:
            "Yes, premium users get priority customer support whenever they need help.",
    },
    {
        question: "Is there a free trial?",
        answer:
            "Yes, you can try our premium features before choosing a paid subscription.",
    },
];

const PremiumFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen w-full bg-slate-950 px-5 py-20 text-white">
            <div className="mx-auto max-w-4xl">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                        FAQ
                    </span>

                    <h2 className="mt-6 text-4xl font-bold md:text-6xl">
                        Frequently Asked{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        Everything you need to know about our premium features.
                    </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${isOpen
                                    ? "border-cyan-400/50 bg-white/[0.08] shadow-[0_0_35px_rgba(34,211,238,0.12)]"
                                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="flex cursor-pointer w-full items-center justify-between gap-5 px-6 py-5 text-left"
                                >
                                    <span className="text-base font-semibold md:text-lg">
                                        {item.question}
                                    </span>

                                    <span
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                                            ? "rotate-180 bg-cyan-400 text-black"
                                            : "bg-white/10 text-white"
                                            }`}
                                    >
                                        {isOpen ? (
                                            <Minus size={20} />
                                        ) : (
                                            <Plus size={20} />
                                        )}
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 leading-7 text-gray-400">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default PremiumFAQ;