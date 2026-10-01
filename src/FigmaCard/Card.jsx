
import { ArrowUpRight, Heart, MoreHorizontal, Sparkles } from "lucide-react";
const Card = ({ src, time, key, userName, webSiteName }) => {
    return (
        <div key={key} >
            {/* Card */}
            <div className="group relative w-full max-w-sm overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]">

                {/* Preview */}
                <div className="relative h-64 overflow-hidden bg-[#1e1e1e]">

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff7262] via-[#a259ff] to-[#1abcfe] opacity-90" />

                    {/* Shapes */}
                    <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/20 blur-sm" />

                    <div className="absolute bottom-8 right-8 h-32 w-32 rotate-12 rounded-3xl bg-white/20 backdrop-blur-md" />

                    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-3xl bg-white shadow-2xl transition duration-500 group-hover:rotate-0 group-hover:scale-110">
                        <Sparkles className="text-[#a259ff]" size={34} />
                    </div>

                    {/* Top Buttons */}
                    <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md transition hover:bg-black/40">
                        <MoreHorizontal size={20} />
                    </button>

                    <button className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
                        <Heart size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">

                    {/* User */}
                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">
                            <img
                                src={src}
                                alt="User"
                                className="h-11 w-11 rounded-full object-cover"
                            />

                            <div>
                                <h3 className="font-semibold text-[#1e1e1e]">
                                    {userName || "Creative Studio"}
                                </h3>

                                <p className="text-xs text-gray-500">
                                    @creative_design
                                </p>
                            </div>
                        </div>

                        <span className="rounded-full bg-[#a259ff]/10 px-3 py-1 text-xs font-semibold text-[#7c3aed]">
                            Pro
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#1e1e1e]">
                        {webSiteName || "Figma Design System"}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        A clean and scalable design system for modern digital products.
                    </p>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-xs font-medium text-gray-600">
                            UI/UX
                        </span>

                        <span className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-xs font-medium text-gray-600">
                            Figma
                        </span>

                        <span className="rounded-full bg-[#f2f2f2] px-3 py-1.5 text-xs font-medium text-gray-600">
                            Design
                        </span>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">

                        <div>
                            <p className="text-xs text-gray-400">
                                Updated
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-700">
                                {time}
                            </p>
                        </div>

                        <button className="flex items-center gap-2 rounded-xl bg-[#1e1e1e] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a259ff]">
                            View Design
                            <ArrowUpRight size={16} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
