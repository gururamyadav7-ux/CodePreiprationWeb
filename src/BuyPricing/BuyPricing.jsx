import { SiGooglesummerofcode } from "react-icons/si";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
const BuyPricing = () => {
    return (
        <div className="flex flex-col gap-4 w-full lg:w-[40%] p-4">
            <div className="bg-gray-800 p-4 rounded-lg flex flex-col gap-10">
                <h4 className="text-white text-xl">Package type</h4>
                <div className="flex gap-4 items-center">
                    <input type="radio" className="w-6 h-6" />
                    <div>
                        <h4 className="text-white">Standard License</h4>
                        <p className="text-gray-300">
                            End-users can't be charged for.Read full
                            <span className="text-blue-400"> Standard License</span>
                        </p>
                    </div>
                    <span className="text-white">$59</span>
                </div>
                <div className="flex gap-4 items-center">
                    <input type="radio" className="w-6 h-6" />
                    <div>
                        <h4 className="text-white">Standard Plus</h4>
                        <p> <span>✅</span> Standard License + Additional Features</p>
                        <p>⚛️ TypeScript source code</p>
                        <p>💎 Figma resources</p>
                        <p className="text-gray-300">
                            End-users can't be charged for.Read full
                            <span className="text-blue-400"> Standard License</span>
                        </p>
                    </div>
                    <span className="text-white">$99</span>
                </div>
                <div className="flex gap-4 items-center">
                    <input type="radio" className="w-6 h-6" />
                    <div>
                        <h4 className="text-white">Standard Plus</h4>
                        <p> <span>✅</span> Standard License + Additional Features</p>
                        <p>⚛️ TypeScript source code</p>
                        <p>💎 Figma resources</p>
                        <p className="text-gray-300">
                            End-users can't be charged for.Read full
                            <span className="text-blue-400"> Standard License</span>
                        </p>
                    </div>
                    <span className="text-white">$249</span>
                </div>

            </div>
            <div>
                {/* Button */}
                <button
                    className="mt-8 w-full rounded-xl py-3.5 font-semibold transition duration-300 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] "
                >
                    Buy Now
                </button>
                {/* Button */}
                <button
                    className="mt-8 w-full rounded-xl py-3.5 font-semibold transition duration-300 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] border border-white/10 bg-white/5 hover:bg-white/10 "
                >
                    Live Preview
                </button>
            </div>
            <div>
                <div className="flex items-center justify-evenly">
                    <div className="flex gap-2 items-center">
                        <i><MdOutlineShoppingCart size={25} /></i>
                        <span className="text-2xl">2,489</span>
                        <p>Sales</p>
                    </div>
                    <div>
                        <div>
                            <i className="flex gap-1">
                                <FaStar className="text-yellow-300" />
                                <FaStar className="text-yellow-300" />
                                <FaStar className="text-yellow-300" />
                                <FaStar className="text-yellow-300" />
                                <FaStarHalfAlt className="text-yellow-300" />
                            </i>
                        </div>
                        <p>4.57/5 (23 reviews)</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-3 items-center">
                    <span><FaCheck className="text-green-500" /></span>
                    <p>Quality checked by MUI team</p>
                </div>
                <div className="flex gap-3 items-center">
                    <span><FaCheck className="text-green-500" /></span>
                    <p>1 year of free updates
                        6 months of technical support</p>
                </div>
                <div className="flex gap-3 items-center">
                    <span><FaCheck className="text-green-500" /></span>
                    <p>Covered by our <a className="text-blue-600 cursor-pointer" href="">refound policy</a></p>
                </div>
                <div className="flex gap-3 items-center">
                    <span><FaCheck className="text-green-500" /></span>
                    <p>Support MUI's open source projects like Material UI and Base UI.</p>
                </div>
            </div>
            <div className="px-5 lg:px-20">
                <div className="flex items-center justify-between border-b p-2 border-gray-600">
                    <p>Version</p>
                    <p>4.6.0</p>
                </div>
                <div className="flex items-center justify-between border-b p-2 border-gray-600">
                    <p>Latest release</p>
                    <p>May 12, 2026</p>
                </div>
                <div className="flex items-center justify-between border-b p-2 border-gray-600">
                    <p>First release</p>
                    <p>Nov 20, 2021</p>
                </div>
                <div className="flex items-center justify-between border-b p-2 border-gray-600">
                    <p>Category</p>
                    <p>Landing & Corporate</p>
                </div>
                <div className="flex items-center justify-between border-b p-2 border-gray-600">
                    <p>Questions?</p>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 border border-gray-700 px-5 rounded-[10px] py-2">contact author</button>
                </div>
                <div className="flex items-center gap-2 border-b mt-5 p-2 border-gray-600">
                    <i className="p-5 hover:rotate-180 Boder-shadow rounded-full"><SiGooglesummerofcode size={70} /></i>
                    <div>
                        <p className="text-2xl font-bold">Create by</p>
                        <p className="text-[10px] font-bold">UIScodehelp</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BuyPricing
