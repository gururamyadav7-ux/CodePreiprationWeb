
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Pagesweb = () => {
    const [Arrow, setArrow] = useState("")
    return (
        <div >
            <h3 className="text-2xl font-bold">Pages</h3>
            <div className="flex flex-col pb-10 gap-4 pl-10 mt-4">
                <li className="w-20">
                    <a onMouseLeave={() => setArrow("")} onMouseEnter={() => setArrow("translate-x-1.5")} href="" className="text-blue-500 hover:underline flex">Home<IoIosArrowRoundForward className={` -rotate-35 ${Arrow} text-2xl font-bold `} />
                    </a>
                </li>
            </div>
        </div>
    )
}

export default Pagesweb
