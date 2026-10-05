import { useState } from "react"
import Feature from "./Feature"
import Pagesweb from "./Pagesweb"
import PremiumTable from "./Tabel"
import { FaStar } from "react-icons/fa6";


const WebPreview = () => {
    const [Description, setDescription] = useState(true)
    const [Reviews, setReviews] = useState(false)
    const [Changelog, setChangelog] = useState(false)
    return (
        <div className="lg:w-[60%] w-full p-5">
            <h3 className="text-white text-2xl mb-5">Zone - Multipurpose Landing Page + UI Kit</h3>
            <div className="w-full rounded-lg overflow-hidden bg-gray-200 relative">
                {/* Web preview content */}
                <img src="https://techstartups.com/wp-content/uploads/2025/05/Figma.jpg" alt="" />
                <div className=" absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 flex items-center justify-center">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded"> Live Preview</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4">
                    <button onClick={() => {
                        setDescription(true)
                        setChangelog(false)
                        setReviews(false)
                    }} className={` ${Description ? "bg-blue-600" : "bg-gray-600"} text-white px-4 py-2 rounded`}> Description</button>
                    <button onClick={() => {
                        setDescription(false)
                        setChangelog(false)
                        setReviews(true)
                    }} className={` ${Reviews ? "bg-blue-600" : "bg-gray-600"} text-white px-4 py-2 rounded`}> Reviews</button>
                    <button onClick={() => {
                        setDescription(false)
                        setChangelog(true)
                        setReviews(false)
                    }} className={` ${Changelog ? "bg-blue-600" : "bg-gray-600"} text-white px-4 py-2 rounded`}> Changelog</button>
                </div>
                {Description ? <div>
                    <h5>Zone is the perfect UI Kit for Landing & Corporate.</h5>
                    <p>It comes with 20+ ready-made landing pages and 100+ UI components. It is built with React, Next.js, Tailwind CSS, and TypeScript.</p>

                    <PremiumTable />
                    <Feature />
                    <Pagesweb />
                </div> : ""}
                {Reviews ? <div>
                    <h6>You must purchase this theme to leave a review. If you have already purchased it, <a href="" className="text-blue-300 cursor-pointer">sign in</a> to leave a review.</h6>
                    <div className="mt-5">
                        <div className="flex items-center justify-between px-10">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                                <div><p>Daniel S.</p>
                                    <p>a year ago</p></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                </div>
                                <p>for Customizability</p>
                            </div>

                        </div>
                        <div className="px-20 mt-2">
                            <p>Excellent solution. Good code quality, easy to understand the methodologies used by the developers, and converted into a real app in no time. The code is well-documented, featuring a good set of components and templates that are responsive and flexible for customisations. Worth buying it, strongly recommended.</p>
                            <p className="mt-3">Good job, Minimal. It surpassed my expectations</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between px-10">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                                <div><p>Daniel S.</p>
                                    <p>a year ago</p></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                </div>
                                <p>for Customizability</p>
                            </div>

                        </div>
                        <div className="px-20 mt-2">
                            <p>Excellent solution. Good code quality, easy to understand the methodologies used by the developers, and converted into a real app in no time. The code is well-documented, featuring a good set of components and templates that are responsive and flexible for customisations. Worth buying it, strongly recommended.</p>
                            <p className="mt-3">Good job, Minimal. It surpassed my expectations</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between px-10">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                                <div><p>Daniel S.</p>
                                    <p>a year ago</p></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                </div>
                                <p>for Customizability</p>
                            </div>

                        </div>
                        <div className="px-20 mt-2">
                            <p>Excellent solution. Good code quality, easy to understand the methodologies used by the developers, and converted into a real app in no time. The code is well-documented, featuring a good set of components and templates that are responsive and flexible for customisations. Worth buying it, strongly recommended.</p>
                            <p className="mt-3">Good job, Minimal. It surpassed my expectations</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between px-10">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                                <div><p>Daniel S.</p>
                                    <p>a year ago</p></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                </div>
                                <p>for Customizability</p>
                            </div>

                        </div>
                        <div className="px-20 mt-2">
                            <p>Excellent solution. Good code quality, easy to understand the methodologies used by the developers, and converted into a real app in no time. The code is well-documented, featuring a good set of components and templates that are responsive and flexible for customisations. Worth buying it, strongly recommended.</p>
                            <p className="mt-3">Good job, Minimal. It surpassed my expectations</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center justify-between px-10">
                            <div className="flex items-center gap-2">
                                <div className="w-16 h-16 rounded-full bg-gray-700"></div>
                                <div><p>Daniel S.</p>
                                    <p>a year ago</p></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                    <i><FaStar className="text-yellow-400" /></i>
                                </div>
                                <p>for Customizability</p>
                            </div>

                        </div>
                        <div className="px-20 mt-2">
                            <p>Excellent solution. Good code quality, easy to understand the methodologies used by the developers, and converted into a real app in no time. The code is well-documented, featuring a good set of components and templates that are responsive and flexible for customisations. Worth buying it, strongly recommended.</p>
                            <p className="mt-3">Good job, Minimal. It surpassed my expectations</p>
                        </div>
                    </div>
                </div> : ""}
                {Changelog ? <div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold">v4.6.0</h4>
                        <h5 className="text-xl font-bold">May 12, 2026</h5>
                        <div className="pl-10 mt-3">
                            <li>New Upgraded to Vite.js v8</li>
                            <li>New Upgraded to MUI v9</li>
                            <li>Updated ESLint rules in in eslint.config.mjs.</li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/theme/core/components.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/animate/*.</button></li>
                            <li>Updated <button className=" border rounded-3xl cursor-pointer px-2 p-1">src/components/hook-form/*.</button></li>
                            <li>Updated dependencies.</li>
                        </div>
                    </div>
                </div> : ""}
            </div>
        </div>
    )
}

export default WebPreview
