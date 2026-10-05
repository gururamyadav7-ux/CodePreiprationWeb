import { SiGooglesummerofcode } from "react-icons/si";
import { ArrowUpRight, Heart, MoreHorizontal } from "lucide-react";
const Card = ({ time, src, key, webSiteName }) => {
    return (
        <div key={key} >
            {/* Card */}
            <div className="group relative w-full max-w-sm overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)]">

                {/* Preview */}
                <div className="relative h-64 overflow-hidden bg-[#1e1e1e]">
                    <img className="w-full h-full" src={src} alt="" />
                    <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-full bg-white shadow-2xl transition duration-500 group-hover:rotate-0 group-hover:scale-110">
                        <SiGooglesummerofcode className="text-[#a259ff]" size={30} />
                    </div>

                    {/* Top Buttons */}
                    <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white backdrop-blur-md transition hover:bg-black/40">
                        <MoreHorizontal size={20} />
                    </button>

                    <button className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
                        <Heart size={18} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
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
