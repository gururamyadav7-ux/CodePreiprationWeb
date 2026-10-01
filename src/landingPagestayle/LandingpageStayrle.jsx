import { SiCodemagic } from "react-icons/si";
import { SiGooglesummerofcode } from "react-icons/si";
import {
    ArrowRight,
    Play,
    Sparkles,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Code2,
} from "lucide-react";

const LandingPage = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

            {/* ================= NAVBAR ================= */}
            <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30">
                        <SiGooglesummerofcode size={35}/>
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        UIScodeHelp<span className="text-blue-400">.</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#home" className="text-sm text-slate-300 transition hover:text-white">
                        Home
                    </a>

                    <a href="#features" className="text-sm text-slate-300 transition hover:text-white">
                        Features
                    </a>

                    <a href="#about" className="text-sm text-slate-300 transition hover:text-white">
                        About
                    </a>

                    <a href="#pricing" className="text-sm text-slate-300 transition hover:text-white">
                        Pricing
                    </a>
                </div>

                {/* Navbar Button */}
                <button className="hidden rounded-full border border-slate-700 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:border-blue-500 hover:bg-blue-500/10 md:block">
                    Get Started
                </button>
            </nav>

            {/* ================= HERO ================= */}
            <section
                id="home"
                className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pb-32 lg:pt-24"
            >

                {/* Glow */}
                <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

                <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

                {/* Badge */}
                <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-md">
                    <Zap size={15} />
                    Build something extraordinary
                </div>

                {/* Heading */}
                <div className="mx-auto mt-8 max-w-5xl text-center">

                    <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
                        Create
                        <span className="bg-gradient-to-r ml-3 from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            website
                        </span>
                        <br />
                        experiences that matter.
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                        Build beautiful, fast and scalable digital products with a modern
                        technology stack designed for the next generation of the web.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3.5 font-semibold shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40">
                            Start Building

                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </button>

                        <button className="flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:border-slate-500 hover:bg-white/10">
                            <Play size={16} fill="currentColor" />
                            Watch Demo
                        </button>

                    </div>
                </div>

                {/* ================= HERO CARD ================= */}
                <div className="relative mx-auto mt-20 max-w-5xl">

                    {/* Glow */}
                    <div className="absolute -inset-5 -z-10 rounded-[35px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl" />

                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">

                        {/* Browser Header */}
                        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                            <span className="h-3 w-3 rounded-full bg-red-400/80" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                            <span className="h-3 w-3 rounded-full bg-green-400/80" />

                            <div className="mx-auto hidden h-7 w-1/2 rounded-md bg-white/5 sm:block" />
                        </div>

                        {/* Dashboard */}
                        <div className="grid gap-5 p-5 sm:grid-cols-3 sm:p-8">

                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-sm text-slate-400">Revenue</p>
                                <h3 className="mt-3 text-3xl font-bold">$48.2K</h3>

                                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-sm text-slate-400">Growth</p>
                                <h3 className="mt-3 text-3xl font-bold">+32%</h3>

                                <div className="mt-5 flex items-end gap-1">
                                    {[30, 45, 35, 65, 50, 80, 70, 95].map((height, index) => (
                                        <div
                                            key={index}
                                            style={{ height: `${height}px` }}
                                            className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-purple-400"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-sm text-slate-400">Users</p>
                                <h3 className="mt-3 text-3xl font-bold">18.4K</h3>

                                <div className="mt-5 flex -space-x-2">
                                    {["A", "B", "C", "D", "E"].map((user) => (
                                        <div
                                            key={user}
                                            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-blue-400 to-purple-500 text-xs font-bold"
                                        >
                                            {user}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STATS ================= */}
            <section className="border-y border-white/10 bg-white/[0.02]">
                <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 md:grid-cols-4 lg:px-8">

                    {[
                        ["10K+", "Active Users"],
                        ["99.9%", "Uptime"],
                        ["150+", "Countries"],
                        ["24/7", "Support"],
                    ].map(([number, label]) => (
                        <div key={label} className="border-white/10 text-center md:border-r last:border-0">
                            <h3 className="text-3xl font-bold sm:text-4xl">
                                {number}
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                {label}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ================= FEATURES ================= */}
            <section
                id="features"
                className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
            >

                <div className="mx-auto max-w-2xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                        Powerful Features
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Everything you need
                    </h2>

                    <p className="mt-5 text-slate-400">
                        A complete toolkit to turn your ideas into premium digital
                        experiences.
                    </p>

                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">

                    {[
                        {
                            icon: <Zap />,
                            title: "Lightning Fast",
                            text: "Optimized performance for fast loading and smooth interactions.",
                        },
                        {
                            icon: <ShieldCheck />,
                            title: "Secure by Design",
                            text: "Modern security practices keep your data and users protected.",
                        },
                        {
                            icon: <Code2 />,
                            title: "Developer Friendly",
                            text: "Clean architecture and modern tools make development easier.",
                        },
                    ].map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
                        >

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 transition group-hover:scale-110">
                                {feature.icon}
                            </div>

                            <h3 className="mt-7 text-xl font-bold">
                                {feature.title}
                            </h3>

                            <p className="mt-3 leading-7 text-slate-400">
                                {feature.text}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle2 size={16} className="text-blue-400" />
                                Built for modern web
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section id="pricing" className="px-6 pb-24 lg:px-8">

                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-pink-600/10 px-6 py-20 text-center backdrop-blur-xl sm:px-12">

                    <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                        Start Today
                    </p>

                    <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black sm:text-6xl">
                        Turn your idea into something incredible.
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-slate-400">
                        Start building your next digital experience with a modern,
                        powerful and flexible platform.
                    </p>

                    <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-2xl">
                        Get Started

                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />
                    </button>

                </div>
            </section>

        </div>
    );
};

export default LandingPage;

