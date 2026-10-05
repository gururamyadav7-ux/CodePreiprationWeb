import { FaCheck } from "react-icons/fa";

const users = [
    {
        id: 1,
        PackageType: "Next.js (JavaScript)",
        extenson: "(next-app-dir)",
        plan1: <FaCheck className="text-green-500" />,
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,
    },
    {
        id: 2,
        PackageType: "Vite.js (JavaScript)",
        extenson: "",
        plan1: <FaCheck className="text-green-500" />,
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,

    },
    {
        id: 3,
        PackageType: "Next.js (JavaScript)",
        extenson: "(next-app-dir)",
        plan1: "",
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,

    },

    {
        id: 4,
        PackageType: "Vite.js (TypeScript)",
        extenson: "",
        plan1: "",
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,

    },
    {
        id: 4,
        PackageType: `Design Figma file ${<button className="bg-blue-600 text-white px-4 py-2 rounded">
            Preview
        </button>}`,
        extenson: "",
        plan1: "",
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,

    },
    {
        id: 4,
        PackageType: <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">License</p>,
        extenson: "",
        plan1: "",
        plan2: "",
        plan3: "",

    },
    {
        id: 4,
        PackageType: "Use in a free end product.",
        extenson: "",
        plan1: <FaCheck className="text-green-500" />,
        plan2: <FaCheck className="text-green-500" />,
        plan3: <FaCheck className="text-green-500" />,
    },
    {
        id: 4,
        PackageType: "Use in an end product that is sold (one or multiple paying End Users).",
        extenson: "",
        plan1: "",
        plan2: "",
        plan3: <FaCheck className="text-green-500" />,
    },

];

const PremiumTable = () => {
    return (
        <div className=" mt-10 text-white">


            {/* Table Card */}
            <div className="
                                overflow-hidden rounded-2xl
                                border border-white/10
                                bg-white/[0.04]
                                shadow-2xl shadow-purple-950/20
                                backdrop-blur-xl">

                {/* Gradient Top Border */}
                <div className="h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[750px] text-left">

                        {/* Table Head */}
                        <thead className="border-b border-white/10 bg-white/[0.03]">
                            <tr>
                                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Package Type
                                </th>

                                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Standard
                                </th>

                                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Plus
                                </th>

                                <th className="px-6 py-5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    Extended
                                </th>


                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="
                      border-b border-white/5
                      transition duration-300
                      hover:bg-white/[0.04]
                    "
                                >

                                    {/* User */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <h3 className="font-semibold">
                                                    {user.PackageType}
                                                </h3>

                                                <p className="text-sm text-slate-500">
                                                    {user.extension}
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    {/* Plan */}
                                    <td className="px-6 py-5">

                                        <span>
                                            {user.plan1}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span>
                                            {user.plan2}
                                        </span>

                                    </td>
                                    <td className="px-6 py-5">

                                        <span>
                                            {user.plan3}
                                        </span>

                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
            <div className="mt-4 text-sm text-slate-400">
                <p>Learn more : <a href="#" className="text-blue-500 hover:underline">Packages & Licenses</a></p>
            </div>

        </div>
    );
};

export default PremiumTable;